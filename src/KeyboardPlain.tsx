// import styles from '../src/Keyboard.model.css'
import '../src/Keyboard.model.css'

const KEYS = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

type KeyboardPlainProps = {
    disabled?: boolean
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
}

export function KeyboardPlain({
                                  activeLetters,
                                  inactiveLetters,
                                  addGuessedLetter,
                                  disabled = false
                              }: KeyboardPlainProps) {
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(55px, 1fr)",
            gap: ".5rem",
        }}>
            {KEYS.map(key => {
                const isActive = activeLetters.includes(key)
                const isInactive = inactiveLetters.includes(key)
                return <button
                    onClick={() => addGuessedLetter(key)}
                    className={`${isActive ? "active" : ""} ${
                        isInactive ? "inactive" : ""
                    } ${"btn"}`}
                    disabled={isInactive || isActive|| disabled}
                    key={key}
                >{key}</button>
            })}
        </div>

    )
}

