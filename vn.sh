 
git rm --cached -f ./src/app/country
rm .gitmodules
git submodule add https://github.com/asahpchoi/vn.git ./src/app/country
git submodule sync
git submodule update --init --recursive --remote