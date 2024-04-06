#include <emscripten/emscripten.h>

extern "C"
{
    EMSCRIPTEN_KEEPALIVE double fromCelsiusToFahrenheit(double temp)
    {
        return temp * 9 / 5 + 32;
    }

    EMSCRIPTEN_KEEPALIVE double fromFahrenheitToCelsius(double temp)
    {
        return (temp - 32) * 5 / 9;
    }
}