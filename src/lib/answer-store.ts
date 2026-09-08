"use client";
import { useSyncExternalStore } from "react";
import type { Answers } from "@/domain/types";
import { QUESTIONNAIRE_VERSION } from "@/data/questions";
import { decodeAnswerSession } from "@/domain/answer-session";
import { sanitizeAnswers } from "@/domain/scoring";
export const STORAGE_KEY = "carita:answers:v1";
let cache: {
  answers: Answers;
  ready: boolean;
  persistent: boolean;
  questionnaireChanged: boolean;
} = {
  answers: {},
  ready: false,
  persistent: true,
  questionnaireChanged: false,
};
const server = cache;
const listeners = new Set<() => void>();
let loaded = false;
function emit() {
  listeners.forEach((fn) => fn());
}
function read() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "null");
    cache = {
      ...decodeAnswerSession(saved),
      ready: true,
      persistent: true,
    };
  } catch {
    cache = {
      answers: {},
      ready: true,
      persistent: false,
      questionnaireChanged: false,
    };
  }
}
function subscribe(fn: () => void) {
  listeners.add(fn);
  if (!loaded) {
    loaded = true;
    read();
    emit();
  }
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === null) {
      read();
      emit();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(fn);
    window.removeEventListener("storage", onStorage);
  };
}
export function useAnswers() {
  return useSyncExternalStore(
    subscribe,
    () => cache,
    () => server,
  );
}
export function setAnswers(answers: Answers) {
  const safe = sanitizeAnswers(answers);
  let persistent = true;
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ version: QUESTIONNAIRE_VERSION, answers: safe }),
    );
  } catch {
    persistent = false;
  }
  cache = {
    answers: safe,
    ready: true,
    persistent,
    questionnaireChanged: false,
  };
  emit();
}
export function clearAnswers() {
  let persistent = true;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    persistent = false;
  }
  cache = { answers: {}, ready: true, persistent, questionnaireChanged: false };
  emit();
}
