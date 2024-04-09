#include <emscripten/emscripten.h>
#include <math.h>

extern "C"
{
    EMSCRIPTEN_KEEPALIVE double fromCelsiusToFahrenheit(double temp)
    {
        return round((temp * 9 / 5 + 32) * 10) / 10;
    }

    EMSCRIPTEN_KEEPALIVE double fromFahrenheitToCelsius(double temp)
    {
        return round(((temp - 32) * 5 / 9) * 10) / 10;
    }
}