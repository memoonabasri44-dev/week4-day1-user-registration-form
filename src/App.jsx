import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import FormShell from './components/FormShell.jsx';
import './components/formShell.css';
import './App.css';

/**
 * Day 1 — React Hook Form Fundamentals
 * Covers: register, handleSubmit, watch, formState (uncontrolled inputs)
 * Deliverable: User Registration Form
 */
export default function App() {
  const [submitted, setSubmitted] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, touchedFields, isSubmitting },
  } = useForm({
    mode: 'onTouched',
    defaultValues: { fullName: '', email: '', password: '', role: 'student' },
  });

  const watched = watch();

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 500)); // simulate async submit
    setSubmitted(data);
  };

  const statusRows = useMemo(() => {
    const fields = ['fullName', 'email', 'password', 'role'];
    return fields.map((name) => {
      const touched = touchedFields[name];
      const hasError = Boolean(errors[name]);
      const hasValue = Boolean(watched[name]);
      let status = 'pending';
      if (touched || hasValue) status = hasError ? 'invalid' : 'valid';
      return { name, status };
    });
  }, [errors, touchedFields, watched]);

  return (
    <div className="page">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">{'{ }'}</span>
          <div className="brand-text">
            <span className="brand-title">Week 4 · Day 1</span>
            <span className="brand-sub">React Hook Form Fundamentals</span>
          </div>
        </div>
      </header>

      <main className="stage">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <FormShell
            eyebrow="Day 1 · React Hook Form"
            title="User Registration Form"
            description="Uncontrolled inputs wired with register(), submitted through handleSubmit(), and watched live via watch()."
            statusRows={statusRows}
          >
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="field">
                <label htmlFor="fullName">Full name</label>
                <input
                  id="fullName"
                  className={errors.fullName ? 'has-error' : ''}
                  placeholder="Ayesha Khan"
                  {...register('fullName', {
                    required: 'Full name is required',
                    minLength: { value: 3, message: 'Use at least 3 characters' },
                  })}
                />
                {errors.fullName && <span className="field-error">{errors.fullName.message}</span>}
              </div>

              <div className="field">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  className={errors.email ? 'has-error' : ''}
                  placeholder="you@example.com"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Enter a valid email address',
                    },
                  })}
                />
                {errors.email && <span className="field-error">{errors.email.message}</span>}
              </div>

              <div className="field">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  className={errors.password ? 'has-error' : ''}
                  placeholder="At least 8 characters"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: { value: 8, message: 'Use at least 8 characters' },
                  })}
                />
                {errors.password && <span className="field-error">{errors.password.message}</span>}
              </div>

              <div className="field">
                <label htmlFor="role">Role</label>
                <select id="role" {...register('role', { required: true })}>
                  <option value="student">Student</option>
                  <option value="instructor">Instructor</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <button className="submit-btn" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Registering…' : 'Create account'}
              </button>

              {submitted && (
                <p className="success-banner">
                  Registered {submitted.fullName} ({submitted.email}) as {submitted.role}.
                </p>
              )}
            </form>
          </FormShell>
        </motion.div>
      </main>

      <footer className="footbar">
        <span>Week 4 Task · Day 1 deliverable</span>
      </footer>
    </div>
  );
}
