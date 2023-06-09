import { useEffect } from 'react'
import { useFormAndValidation } from '../../hooks/useFormAndValidation'

const Login = ({ onLogin }) => {
  const { values, handleChange, errors, isValid, setIsValid } =
    useFormAndValidation()

  const handleSubmit = (e) => {
    e.preventDefault()
    onLogin(values.email, values.password)
  }
//  проверить токен
  useEffect(() => {
    setIsValid(false)
  }, [])

  return (
    <div className="auth">
      <h3 className="auth__welcome">Вход</h3>
      <form
        onSubmit={handleSubmit}
        className="auth__form"
        noValidate
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          minLength="2"
          maxLength="60"
          className="auth__input auth__input_type_email"
          id="email-input"
          value={values.email || ''}
          onChange={handleChange}
        />
        {/* валидация */}
        <div className="popup__field">
          <span
            className={`email-input-error popup__error popup__error-field ${
              isValid ? '' : 'popup__error_visible'
            }`}
          >
            {errors.email}
          </span>
        </div>
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          required
          minLength="5"
          maxLength="40"
          className="auth__input auth__input_type_password"
          id="password-input"
          value={values.password || ''}
          onChange={handleChange}
        />
          {/* валидация */}
        <div className="popup__field">
          <span
            className={`password-input-error popup__error popup__error-field ${
              isValid ? '' : 'popup__error_visible'
            }`}
          >
            {errors.password}
          </span>
        </div>
        <div className="auth__button-container">
          <button
            type="submit"
            className={`auth__link-button ${
              !isValid ? 'auth__link-button_disabled' : ''
            }`}
            disabled={!isValid}
          >
            Войти
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
