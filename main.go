package main

import (
	"encoding/json"
	"go-react-embed/web"
	"net/http"

	"github.com/labstack/echo/v4"
)

type test struct {
	Name string `json:"name"`
	Age  int    `json:"age"`
}

func main() {
	e := echo.New()

	web.RegisterHandlers(e)
	e.GET("/api", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello World")
	})

	e.GET("/json", func(c echo.Context) error {
		test := test{
			Name: "Go",
			Age:  15,
		}

		c.Response().Header().Set(echo.HeaderContentType, echo.MIMEApplicationJSONCharsetUTF8)
		c.Response().WriteHeader(http.StatusOK)
		json := json.NewEncoder(c.Response()).Encode(test)

		return json
	})

	e.Logger.Fatal(e.Start(":9001"))
}
