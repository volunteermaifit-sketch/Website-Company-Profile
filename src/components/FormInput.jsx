import { forwardRef } from 'react'

const FormInput = forwardRef(
  (
    {
      label,
      type = 'text',
      name,
      id,
      value,
      onChange,
      onBlur,
      error,
      placeholder,
      required = false,
      disabled = false,
      rows,
      className = '',
      ...props
    },
    ref
  ) => {
    const inputId = id || name
    const errorId = `${inputId}-error`
    const describedBy = error ? errorId : undefined

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="label-base">
            {label} {required && <span className="text-accent" aria-hidden="true">*</span>}
          </label>
        )}
        {type === 'textarea' ? (
          <textarea
            ref={ref}
            id={inputId}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            rows={rows || 4}
            className={`input-base resize-none ${error ? 'border-red-300 focus:ring-red-200 focus:border-red-400' : ''} ${className}`}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={describedBy}
            {...props}
          />
        ) : (
          <input
            ref={ref}
            type={type}
            id={inputId}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            className={`input-base ${error ? 'border-red-300 focus:ring-red-200 focus:border-red-400' : ''} ${className}`}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={describedBy}
            {...props}
          />
        )}
        {error && (
          <motion.p
            id={errorId}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1.5 text-sm text-red-500 flex items-center gap-1"
            role="alert"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </motion.p>
        )}
      </div>
    )
  }
)

FormInput.displayName = 'FormInput'

export default FormInput