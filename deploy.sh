#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
npm run build # 生成静态文件
cd docs/.vuepress/dist # 进入生成的文件夹
#blog = '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'
# deploy to github
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:Cynicism-lab/cynicism-lab/cynicism-lab.github.io.git
  
else
  msg='来自github action的自动部署'
  githubUrl=https://cynicism-lab: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@github.com/cynicism-lab/cynicism-lab.github.io.git
  git config --global user.name "cynicism-lab"
  git config --global user.email "1711546733@qq.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github



cd -
rm -rf docs/.vuepress/dist
