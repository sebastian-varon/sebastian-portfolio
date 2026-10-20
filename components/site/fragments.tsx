"use client"

import { ArrowLeftRight, BadgeCheck, Bell, Check } from "lucide-react"
import { useId, useState } from "react"
import type { ProjectId } from "@/lib/content"
import "./fragments.css"

/*
 * Small working pieces of each app's interface, built in HTML at true size.
 * The `data-ui` root lets them keep their own borders and control styles.
 */

function Takeover() {
  const events = {
    upcoming: [
      { name: "Anfisa Letyago", date: "Oct 17" },
      { name: "Vendex & B2", date: "Oct 24" },
      { name: "Halloween w/ Schrotthagen", date: "Oct 30" },
      { name: "Aerea (Live)", date: "Nov 21" },
    ],
    past: [
      { name: "Drakk", date: "NYE 2026" },
      { name: "Azyr", date: "Oct 2025" },
      { name: "Adrian Mills", date: "Sep 2025" },
      { name: "Asbak", date: "May 2025" },
    ],
  }
  const [tab, setTab] = useState<keyof typeof events>("upcoming")
  return (
    <div data-ui className="ui ui-t6">
      <div className="ui-t6-tabs" role="tablist" aria-label="Events">
        {(["upcoming", "past"] as const).map((t) => (
          <button key={t} type="button" role="tab" aria-selected={tab === t} onClick={() => setTab(t)}>
            {t === "upcoming" ? "Upcoming" : "Past events"}
          </button>
        ))}
      </div>
      <ul className="ui-t6-list">
        {events[tab].map((e) => (
          <li key={e.name}>
            <span>
              <span className="ui-t6-name">{e.name}</span>
              <span className="ui-t6-date">{e.date}</span>
            </span>
            <span className="ui-t6-btn">{tab === "upcoming" ? "Get tickets" : "Watch set"}</span>
          </li>
        ))}
      </ul>
      <div className="ui-t6-ticker" aria-hidden="true">
        <span>
          {"No spectators · Only participants · ".repeat(4)}
        </span>
      </div>
    </div>
  )
}

function Cory() {
  const shifts = [
    { role: "Bar", filled: 4, of: 4 },
    { role: "Security", filled: 6, of: 8 },
    { role: "Door", filled: 2, of: 2 },
  ]
  const [approved, setApproved] = useState(false)
  const security = shifts[1].filled + (approved ? 1 : 0)
  return (
    <div data-ui className="ui ui-cory">
      <div className="ui-head">
        <span>Warehouse night · Sat 10 pm</span>
        <span className="ui-dim">Shifts</span>
      </div>
      <ul className="ui-rows">
        {shifts.map((s) => {
          const filled = s.role === "Security" ? security : s.filled
          const full = filled === s.of
          return (
            <li key={s.role} className="ui-row">
              <span>{s.role}</span>
              <span className={full ? "ui-ok" : "ui-dim"}>
                {filled} of {s.of}
                {full ? " filled" : ` · ${s.of - filled} open`}
              </span>
            </li>
          )
        })}
      </ul>
      <div className="ui-applicant">
        <div>
          <div className="ui-name">
            Maya R. <BadgeCheck aria-label="ID verified" className="ui-icon ui-ok" />
          </div>
          <div className="ui-dim">Security · rated 4.8 by 3 organizers</div>
        </div>
        <button type="button" className="ui-btn" onClick={() => setApproved((a) => !a)} aria-pressed={approved}>
          {approved ? "Hired" : "Hire"}
        </button>
      </div>
    </div>
  )
}

function Donezo() {
  const [tasks, setTasks] = useState([
    { t: "Renew passport photos", done: true },
    { t: "Call the landlord about the sink", done: false },
    { t: "Submit timesheet", done: false },
    { t: "Gym, 6 pm", done: false },
  ])
  const left = tasks.filter((t) => !t.done).length
  return (
    <div data-ui className="ui ui-phone">
      <div className="ui-phone-top">
        <span className="ui-today">Today</span>
        <span className="ui-dim">{left === 0 ? "All done" : `${left} left`}</span>
      </div>
      <ul className="ui-tasks">
        {tasks.map((task, i) => (
          <li key={task.t}>
            <button
              type="button"
              role="checkbox"
              aria-checked={task.done}
              className="ui-task"
              onClick={() => setTasks((ts) => ts.map((x, j) => (j === i ? { ...x, done: !x.done } : x)))}
            >
              <span className="ui-check">{task.done && <Check aria-hidden="true" className="ui-icon" />}</span>
              <span className={task.done ? "ui-done" : undefined}>{task.t}</span>
            </button>
          </li>
        ))}
      </ul>
      <div className="ui-reminder">
        <Bell aria-hidden="true" className="ui-icon" /> Reminder at 5:30 pm
      </div>
    </div>
  )
}

function Studio() {
  const messages = [
    { who: "kai", text: "how do you stop the kick and the bass fighting?" },
    { who: "noor", text: "sidechain the bass to the kick. 2 or 3 dB of ducking is plenty" },
    { who: "kai", text: "that did it, thank you" },
  ]
  return (
    <div data-ui className="ui ui-chat">
      <div className="ui-head">
        <span># low-end</span>
        <span className="ui-dim">12 online</span>
      </div>
      <ul className="ui-messages">
        {messages.map((m, i) => (
          <li key={i}>
            <span className="ui-who">{m.who}</span> {m.text}
          </li>
        ))}
      </ul>
      <div className="ui-typing" aria-label="noor is typing">
        <span className="ui-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        noor is typing
      </div>
    </div>
  )
}

function Flooring() {
  const id = useId()
  const [v, setV] = useState({ length: 12, width: 14, price: 4.5, waste: 10, box: 20 })
  const area = v.length * v.width
  const needed = area * (1 + v.waste / 100)
  const boxes = v.box > 0 ? Math.ceil(needed / v.box) : 0
  const cost = boxes * v.box * v.price
  const field = (key: keyof typeof v, label: string, step = 1) => (
    <label className="ui-field" htmlFor={`${id}-${key}`}>
      <span className="ui-dim">{label}</span>
      <input
        id={`${id}-${key}`}
        type="number"
        inputMode="decimal"
        min={0}
        step={step}
        value={Number.isNaN(v[key]) ? "" : v[key]}
        onChange={(e) => setV((s) => ({ ...s, [key]: e.target.valueAsNumber || 0 }))}
      />
    </label>
  )
  return (
    <div data-ui className="ui ui-floor">
      <div className="ui-grid">
        {field("length", "Length, ft")}
        {field("width", "Width, ft")}
        {field("price", "Price per sq ft, $", 0.25)}
        {field("waste", "Waste, %")}
        {field("box", "One box covers, sq ft")}
      </div>
      <dl className="ui-result" aria-live="polite">
        <div>
          <dt className="ui-dim">Area</dt>
          <dd>{area.toLocaleString("en-CA", { maximumFractionDigits: 1 })} sq ft</dd>
        </div>
        <div>
          <dt className="ui-dim">Order</dt>
          <dd>
            {boxes} {boxes === 1 ? "box" : "boxes"}
          </dd>
        </div>
        <div>
          <dt className="ui-dim">Material</dt>
          <dd className="ui-big">{cost.toLocaleString("en-CA", { style: "currency", currency: "CAD" })}</dd>
        </div>
      </dl>
    </div>
  )
}

function Currency() {
  const id = useId()
  const [amount, setAmount] = useState(100)
  const [flip, setFlip] = useState(false)
  const rate = 0.72 // sample: 1 CAD = 0.72 USD
  const [from, to] = flip ? ["USD", "CAD"] : ["CAD", "USD"]
  const r = flip ? 1 / rate : rate
  const out = (amount || 0) * r
  return (
    <div data-ui className="ui ui-fx">
      <label className="ui-field" htmlFor={`${id}-amt`}>
        <span className="ui-dim">Amount in {from}</span>
        <input
          id={`${id}-amt`}
          type="number"
          inputMode="decimal"
          min={0}
          value={amount}
          onChange={(e) => setAmount(e.target.valueAsNumber || 0)}
        />
      </label>
      <div className="ui-pair">
        <span>{from}</span>
        <button type="button" className="ui-swap" onClick={() => setFlip((f) => !f)} aria-label="Swap currencies">
          <ArrowLeftRight aria-hidden="true" className="ui-icon" />
        </button>
        <span>{to}</span>
      </div>
      <div className="ui-big" aria-live="polite">
        {out.toLocaleString("en-CA", { style: "currency", currency: to, currencyDisplay: "code" })}
      </div>
      <div className="ui-dim">
        Sample rate · 1 {from} = {r.toFixed(4)} {to}
      </div>
    </div>
  )
}

const fragments: Record<ProjectId, () => React.JSX.Element> = {
  takeover: Takeover,
  cory: Cory,
  donezo: Donezo,
  "studio-connect": Studio,
  flooring: Flooring,
  "currency-flow": Currency,
}

export function Fragment({ id }: { id: ProjectId }) {
  const F = fragments[id]
  return <F />
}
