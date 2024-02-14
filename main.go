package main

import (
	"encoding/json"
	"go-react-embed/web"
	"net/http"

	"github.com/labstack/echo/v4"
)

type User struct {
	Name string `json:"name"`
	Age  int    `json:"age"`
}

func main() {
	e := echo.New()

	web.RegisterHandlers(e)
	e.GET("/api", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello World")
	})

	e.GET("/user", func(c echo.Context) error {
		user := User{
			Name: "John Doe",
			Age:  15,
		}

		c.Response().Header().Set(echo.HeaderContentType, echo.MIMEApplicationJSONCharsetUTF8)
		c.Response().WriteHeader(http.StatusOK)
		json := json.NewEncoder(c.Response()).Encode(user)

		return json
	})

	e.Logger.Fatal(e.Start(":9001"))
}
