import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../Styles/theme";

import { Container, Title, Subtitle, User, SwitchButton } from "./styles";

function DarkMode() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Container>
        <Title>{theme} mode</Title>
        <SwitchButton onClick={() => toggleTheme()}>
          {theme === "dark" ? (
            <img src="https://cdn.icon-icons.com/icons2/1493/PNG/512/sun_102839.png" />
          ) : (
            <img src="https://cdn.icon-icons.com/icons2/1448/PNG/512/42638waxingcrescentmoon_99014.png" />
          )}
        </SwitchButton>
        <Subtitle className="mt-4">
          by:
          <User
            href=""
            target="_blank"
            className="ml-2"
          >
            @ErikaSkarda
          </User>
        </Subtitle>
      </Container>
    </ThemeProvider>
  );
}

export default DarkMode;