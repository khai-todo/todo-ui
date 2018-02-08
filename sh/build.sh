bash 'sh test.sh'
rm -rf lib
babel --minified -s -d lib src $@
