import React from "react";
export const useTheme = () => {
    const [theme, setTheme] = React.useState(
        JSON.parse(localStorage.getItem("data")) || "light"
    )
    React.useEffect(() => {
        document.documentElement.setAttribute("data", theme)
        localStorage.setItem("data", JSON.stringify(theme))
    })
    return { setTheme }
}