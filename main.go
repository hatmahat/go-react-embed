package main

import (
	"go-react-embed/web"
	"net/http"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()

	web.RegisterHandlers(e)
	e.GET("/api", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello World")
	})

	e.Logger.Fatal(e.Start(":9001"))
}
