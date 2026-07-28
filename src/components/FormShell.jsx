import { motion } from 'framer-motion';

/**
 * Two-column shell shared by both days:
 * left = the actual form, right = a live "field health" console
 * that mirrors react-hook-form's formState in real time.
 * This is the project's signature element.
 */
export default function FormShell({ eyebrow, title, description, children, statusRows = [] }) {
  return (
    <div className="form-shell">
      <section className="form-panel">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="title">{title}</h1>
        {description && <p className="description">{description}</p>}
        {children}
      </section>

      <aside className="console">
        <div className="console-head">
          <span className="console-dot" />
          <span className="console-dot" />
          <span className="console-dot" />
          <span className="console-title">field_health.json</span>
        </div>
        <div className="console-body">
          {statusRows.length === 0 && (
            <p className="console-empty">// start typing to see live validation</p>
          )}
          {statusRows.map((row) => (
            <motion.div
              key={row.name}
              className={`console-row status-${row.status}`}
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            >
              <span className="console-key">{row.name}:</span>
              <span className="console-value">{row.status}</span>
            </motion.div>
          ))}
        </div>
      </aside>
    </div>
  );
}
