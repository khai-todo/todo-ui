bash 'sh/test.sh' || exit $?
rm -rf lib
babel --minified -s -d lib src $@
