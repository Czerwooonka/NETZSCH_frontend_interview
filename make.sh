MODULE_NAME=converter
INPUT=cpp/${MODULE_NAME}.cpp
OUTPUT=src/utils/wasm/${MODULE_NAME}.js

emcc ${INPUT} \
    -o ${OUTPUT} \
    -sMODULARIZE -sSINGLE_FILE=1 -sEXPORTED_FUNCTIONS=_fromCelsiusToFahrenheit,_fromFahrenheitToCelsius -sEXPORTED_RUNTIME_METHODS=ccall