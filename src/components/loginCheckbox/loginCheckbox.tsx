import type { LoginInputType } from '../../types/types'
import loginCheckboxCss from './loginCheckbox.module.scss'

const LoginChecbox = ({ inputLabel, inputType, inputName, inputId, inputPlaceholder }: LoginInputType) => {
    return (
        <div className={`${loginCheckboxCss['frs-input__wrap']}`}>
            <input type={inputType} name={inputName} id={inputId} placeholder={inputPlaceholder} className={`${loginCheckboxCss['frs-input__checkBox']}`} />
            <label htmlFor={inputId} className={`${loginCheckboxCss['frs-input__label']}`}>{inputLabel}</label>
        </div>
    )
}

export default LoginChecbox