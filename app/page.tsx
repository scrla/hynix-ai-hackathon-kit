"use client";

import { useMemo, useState } from "react";
import { normalizeTask, type Task } from "@/lib/tasks";

const sample: Task[] = [
  { id: "1", title: "요구사항 분석", done: false },
  { id: "2", title: "핵심 사용자 흐름 구현", done: false },
  { id: "3", title: "테스트 및 제출 검수", done: false },
];

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>(sample);
  const [draft, setDraft] = useState("");
  const [error, setError] = useState("");
  const completed = useMemo(() => tasks.filter((t) => t.done).length, [tasks]);

  function addTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const title = normalizeTask(draft);
    if (!title) { setError("작업을 입력해 주세요."); return; }
    setTasks((list) => [...list, { id: crypto.randomUUID(), title, done: false }]);
    setDraft("");
    setError("");
  }

  return <main className="shell">
    <header className="topbar"><div className="brand"><span className="logo">H</span> HACKATHON / KIT</div><span className="status">● Ready</span></header>
    <section className="hero">
      <span className="eyebrow">CODEX · NEXT.JS · TYPESCRIPT</span>
      <h1>From a prompt<br />to a <em>working product.</em></h1>
      <p>이 화면은 준비용 기능 샘플입니다. 실제 문제가 공개되면 이 화면을 요구사항에 맞는 서비스로 교체하세요.</p>
      <div className="chips"><span>App Router</span><span>API route</span><span>Test harness</span></div>
    </section>
    <section className="panel" aria-labelledby="tasks-heading">
      <div className="panel-head"><div><span className="eyebrow">INTERACTIVE DEMO</span><h2 id="tasks-heading">Build checklist</h2></div><span aria-live="polite">{completed} / {tasks.length} done</span></div>
      <div className="track" role="progressbar" aria-label="작업 완료" aria-valuemin={0} aria-valuemax={tasks.length} aria-valuenow={completed}><div style={{width:`${tasks.length ? 100*completed/tasks.length : 0}%`}} /></div>
      <ul className="tasks">{tasks.map((task) => <li key={task.id}>
        <label><input type="checkbox" checked={task.done} onChange={() => setTasks((list) => list.map((t) => t.id === task.id ? {...t, done:!t.done} : t))} /><span className={task.done ? "done" : ""}>{task.title}</span></label>
        <button type="button" className="remove" aria-label={`${task.title} 삭제`} onClick={() => setTasks((list) => list.filter((t) => t.id !== task.id))}>×</button>
      </li>)}</ul>
      <form onSubmit={addTask} className="form"><input aria-label="새 작업" value={draft} onChange={(e) => setDraft(e.target.value)} maxLength={100} placeholder="Add a new task…"/><button type="submit">+ Add task</button></form>
      {error && <p className="error" role="alert">{error}</p>}
    </section>
    <footer>PREPARATION KIT · NOT A COMPETITION SUBMISSION <span>v0.1</span></footer>
  </main>;
}
