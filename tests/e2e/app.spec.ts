import { sampleAnswers } from "../fixtures";
import { test, expect, type Page } from "@playwright/test";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
async function finish(page: Page, skip = false) {
  for (let i = 0; i < 10; i++) {
    await expect(
      page.getByText(`質問 ${i + 1} / 10`, { exact: true }),
    ).toBeVisible();
    const radios = page.getByRole("radio");
    const questionId = await radios.first().getAttribute("name");
    if (skip) await radios.last().check();
    else
      await page
        .locator(
          `input[value="${sampleAnswers[questionId as keyof typeof sampleAnswers]}"]`,
        )
        .check();
    await page
      .getByRole("button", {
        name: i === 9 ? "結果を見る →" : "次の質問 →",
        exact: true,
      })
      .click();
  }
  await expect(page).toHaveURL(/\/result\//);
}
async function noOverflow(page: Page) {
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
}
test("全質問・出典・同点・回答修正・再読込・消去", async ({ page }, info) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  const sends: string[] = [];
  page.on("request", (r) => {
    if (
      !["GET", "HEAD"].includes(r.method()) ||
      r.postData() ||
      new URL(r.url()).origin !== "http://127.0.0.1:43871"
    )
      sends.push(r.url());
  });
  await page.goto(basePath + "/");
  await noOverflow(page);
  await page.screenshot({
    path: `test-results/home-${info.project.name}.png`,
    fullPage: true,
  });
  await page.getByRole("link", { name: "診断を始める" }).click();
  await expect(
    page.getByRole("button", { name: "次の質問 →", exact: true }),
  ).toBeDisabled();
  await page.getByText("この質問の出典を見る", { exact: true }).click();
  await expect(page.getByText("III.94 / §45", { exact: true })).toBeVisible();
  await noOverflow(page);
  await page.getByText("この質問の出典を見る", { exact: true }).click();
  await page.getByRole("radio").first().check();
  await page.getByRole("button", { name: "次の質問 →", exact: true }).click();
  await page.getByRole("button", { name: "← 前の質問", exact: true }).click();
  await expect(page.getByRole("radio").first()).toBeChecked();
  await page.screenshot({
    path: `test-results/question-${info.project.name}.png`,
    fullPage: true,
  });
  await finish(page);
  await expect(
    page.getByRole("heading", { name: "貪行・信行", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "学習・質問・聞法・対話・師との生活" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "三蔵での根拠", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "『清浄道論』での補足", exact: true }),
  ).toBeVisible();
  await page.locator(".match summary").first().click();
  await expect(page.locator(".match[open] blockquote")).toBeVisible();
  await noOverflow(page);
  await page.screenshot({
    path: `test-results/result-${info.project.name}.png`,
    fullPage: true,
  });
  await page.reload();
  await expect(
    page.getByRole("heading", { name: "貪行・信行", exact: true }),
  ).toBeVisible();
  await page.getByRole("link", { name: "回答を見直す →" }).click();
  await page.locator('input[value="flaw"]').check();
  await page.locator(".site-header .wordmark").click();
  await page.goto(basePath + "/result/");
  await expect(
    page.locator(".count-row").filter({ hasText: "貪行" }),
  ).toContainText("4 件");
  await page
    .getByRole("button", { name: "保存した回答を消去して、やり直す" })
    .click();
  await expect(page.getByRole("radio").first()).not.toBeChecked();
  expect(
    await page.evaluate(() => localStorage.getItem("carita:answers:v1")),
  ).toBeNull();
  expect(errors).toEqual([]);
  expect(sends).toEqual([]);
});
test("未回答・壊れた保存・全スキップ", async ({ page }) => {
  await page.goto(basePath + "/result/");
  await expect(
    page.getByRole("heading", { name: "まだ回答がそろっていません" }),
  ).toBeVisible();
  await page.evaluate(() =>
    localStorage.setItem("carita:answers:v1", "{broken"),
  );
  await page.reload();
  await expect(
    page.getByRole("heading", { name: "まだ回答がそろっていません" }),
  ).toBeVisible();
  await page.getByRole("link", { name: "質問へ進む →" }).click();
  await finish(page, true);
  await expect(
    page.getByRole("heading", { name: "一致する記述はありませんでした" }),
  ).toBeVisible();
  expect(await page.locator(".practice-card").count()).toBe(0);
  await noOverflow(page);
});
test("途中の再読込と出典・方針ページ", async ({ page }) => {
  await page.goto(basePath + "/questions/");
  await page.getByRole("radio").first().check();
  await page.getByRole("button", { name: "次の質問 →", exact: true }).click();
  await page.reload();
  await expect(page.getByText("質問 2 / 10", { exact: true })).toBeVisible();
  await page.goto(basePath + "/sources/");
  await expect(
    page.getByRole("heading", { name: "出典を読む", exact: true }),
  ).toBeVisible();
  await expect(page.locator("#m14-moha")).toContainText("garusaṁvāse");
  await noOverflow(page);
  await page.goto(basePath + "/about/");
  await expect(
    page.getByRole("heading", { name: "一致数は、仏典の点数ではありません" }),
  ).toBeVisible();
  await noOverflow(page);
});
test("保存が使えない場合にも回答できる", async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(Storage.prototype, "setItem", {
      value: () => {
        throw new Error("storage blocked");
      },
    });
  });
  await page.goto(basePath + "/questions/");
  await page.getByRole("radio").first().check();
  await expect(page.getByRole("status")).toContainText("保存できない");
  await finish(page);
  await expect(
    page.getByRole("heading", { name: "貪行・信行", exact: true }),
  ).toBeVisible();
});

test("参考の意訳・日常例・追加の出典とイラスト", async ({ page }) => {
  await page.goto(basePath + "/");
  await expect(page.locator(".hero-landscape img")).toBeVisible();
  expect(
    await page
      .locator(".hero-landscape img")
      .evaluate(
        (img: HTMLImageElement) => img.complete && img.naturalWidth > 0,
      ),
  ).toBe(true);
  await page.evaluate(
    (answers) =>
      localStorage.setItem(
        "carita:answers:v1",
        JSON.stringify({ version: 2, answers }),
      ),
    sampleAnswers,
  );
  await page.goto(basePath + "/result/");
  await expect(page.locator(".practice-card .reading-aid")).toHaveCount(11);
  const breath = page
    .locator(".practice-card")
    .filter({ hasText: "いま、吸っている息・吐いている息に気づく" });
  await expect(breath.locator(".reading-label")).toContainText("参考 · 意訳");
  await expect(breath.locator(".everyday-example")).toContainText(
    "本サイトの例",
  );
  await breath
    .getByText("この参考説明の位置づけ・出典", { exact: true })
    .click();
  await expect(breath.locator(".reading-references")).toContainText(
    "採点には使いません",
  );
  await noOverflow(page);
  await breath
    .getByRole("link", { name: "参照 reader-breath →", exact: true })
    .click();
  await expect(page.locator("#reader-breath")).toBeInViewport();
  await expect(page.locator("#reader-breath")).toContainText(
    "気質の割当には使用しません",
  );
  await noOverflow(page);
});

test("質問改訂の通知と旧回答の混用防止", async ({ page }) => {
  await page.goto(basePath + "/");
  await page.evaluate(
    (answers) =>
      localStorage.setItem(
        "carita:answers:v1",
        JSON.stringify({ version: 1, answers }),
      ),
    sampleAnswers,
  );
  await page.goto(basePath + "/result/");
  await expect(
    page.getByText(
      "質問を改訂したため、以前の回答は今回の照合に使っていません。新しい場面の質問からお答えください。",
    ),
  ).toBeVisible();
  await page.getByRole("link", { name: "質問へ進む →" }).click();
  await expect(page.locator(".question-update")).toBeVisible();
  await expect(page.getByText("質問 1 / 10", { exact: true })).toBeVisible();
  await expect(page.locator("input:checked")).toHaveCount(0);
  await page.locator('input[value="appeal"]').check();
  expect(
    await page.evaluate(
      () => JSON.parse(localStorage.getItem("carita:answers:v1")!).version,
    ),
  ).toBe(2);
  await page.reload();
  await expect(page.getByText("質問 2 / 10", { exact: true })).toBeVisible();
  await page.getByRole("button", { name: "← 前の質問", exact: true }).click();
  await expect(page.locator('input[value="appeal"]')).toBeChecked();
  await noOverflow(page);
});

test("公開パスの画像・背景・権利表示が読み込める", async ({
  page,
  request,
}) => {
  const failures: string[] = [];
  page.on("response", (response) => {
    if (response.status() >= 400) failures.push(response.url());
  });
  await page.goto(basePath + "/");
  for (const img of await page.locator("img").all()) {
    await img.scrollIntoViewIfNeeded();
    await expect
      .poll(() => img.evaluate((el: HTMLImageElement) => el.naturalWidth))
      .toBeGreaterThan(0);
    expect(await img.getAttribute("src")).toMatch(
      new RegExp(`^${basePath}/images/`),
    );
  }
  const background = await page
    .locator("body")
    .evaluate((el) => getComputedStyle(el).getPropertyValue("--forest-image"));
  expect(background).toContain(basePath + "/images/forest.webp");
  const notice = await request.get(basePath + "/third-party-notices.txt");
  expect(notice.ok()).toBe(true);
  expect(await notice.text()).toContain("MIT License");
  expect(failures).toEqual([]);
});
