bash 'sh/babel.sh' || exit $?
jest --coverage $@
