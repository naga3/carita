import { QUESTIONNAIRE_VERSION } from "@/data/questions";
import { sanitizeAnswers } from "./scoring";
/** A changed questionnaire must never reinterpret previously saved answers. */
export function decodeAnswerSession(saved: unknown) {
  if (!saved || typeof saved !== "object" || Array.isArray(saved))
    return { answers: {}, questionnaireChanged: false };
  const data = saved as Record<string, unknown>;
  const questionnaireChanged =
    data.version !== undefined && data.version !== QUESTIONNAIRE_VERSION;
  return {
    answers: sanitizeAnswers(
      data.version === QUESTIONNAIRE_VERSION ? data.answers : null,
    ),
    questionnaireChanged,
  };
}
