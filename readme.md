# 这是git测试用的工作区
工作区文件均为测试文件</br>
目前仅有master分支

# 已将相关文件推送到GitHub

## 笔记
- ### git init
 > 将当前目录初始化为git工作区</br>
 > 会在当前目录生成.git文件夹, 切勿修改此文件夹的内容

- ### git add <file name>
 > 将工作区文件修改添加至暂存区</br>
 > 可以连续执行多次add

- ### git commit -m <本次提交的描述>
 > 将暂存区的所有内容保存至本地仓库

- ### git status
 > 显示有变更的文件

- ### git log
 > commit日志

- ### git reflog
 > 版本变更日志

- ### git remot add <仓库别名> <远程仓库地址>
 > 绑定远程仓库

- ### git push <仓库> <分支>
 > 将本地仓库推送到远程仓库

- ### git clone <远程仓库地址>
 > 将指定远程仓库克隆到本地