bash 'sh/build.sh' || exit $?
jest --coverage $@
