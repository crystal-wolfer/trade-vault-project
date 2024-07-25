import zxcvbn from "zxcvbn" // npm i zxcvbn password strength validator lib
 
export default function PasswordIndicator({password}) {
    const percentage = zxcvbn(password).score * 100 / 4 // zxcvbn supports 4 score values
    let textValue = "";
    let colorValue = "";
 
    const progressColor = () => {
        switch (zxcvbn(password).score) {
            case 0:
                return { text: "Very weak", color: "#ef4444" }
            case 1:
                return { text: "Weak", color: "#facc15" }
            case 2: 
                return { text: "Fair", color: "#f97316" }
            case 3:
                return { text: "Strong", color: "#84cc16" }
            case 4:
                return { text: "Very strong", color: "#16a34a" }
            default: return "none"
 
        }
    }
 
    const styles = progressColor();
    textValue = styles.text;
    colorValue = styles.color;
 
    const changeColor = () => ({
        width: `${percentage}%`,
        background: `${colorValue}`,
        height: "7px",
 
    })
 
 
    return (
        <>
        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
            <div className="bg-blue-600 h-2 rounded-full" style={changeColor()}></div>
        </div>
        <div>
            <span className="text-sm font-medium mx-2" style={{color: colorValue}}>{textValue}</span>
        </div>
        </>
    )
}
 
