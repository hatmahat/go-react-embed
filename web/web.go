package web

import (
	"embed"

	"github.com/labstack/echo/v4"
)

var (
	//go:embed all:dist
	dist embed.FS
	//go:embed dist/index.html
	indexHTML embed.FS

	distDirFS     = echo.MustSubFS(dist, "dist")
	distIndexHtml = echo.MustSubFS(indexHTML, "dist")
)

func RegisterHandlers(e *echo.Echo) {
	e.StaticFS("/", distDirFS)

	viewer := e.Group("/viewer")
	viewer.FileFS("/home", "index.html", distIndexHtml)
	viewer.FileFS("/about", "index.html", distIndexHtml)
}
