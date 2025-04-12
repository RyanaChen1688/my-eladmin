# my-eladmin
我的vue后台管理系统学习项目

### 先把本地的代码和远程仓库进行管理
- 掌握git的使用，给本地代码添加远程仓库地址
- 1、保证你本地安装了git工具，cmd输入git，如果提示命令找不到的话，可能是没有配置环境变量，也有可能是没有安装git，请检查
- 2、需要使用git remote -v，我当前本地的项目关联了哪些远程地址
- 3、需要使用git remote add 远程名字github|gitee|origin 远程仓库的地址（https://github.com/用户名/仓库名字.git）
- 4、git remote remove 远程名字
- 5、git remote rename 远程名字 远程新名字
- 6、git remote set-url 远程名字 新的url远程仓库地址

### 推送本地代码到远程仓库
- 1、git checkout -b xxx个人分支 (checkout检出、-b branch分支)公司项目开发代码都是提交到个人分支上。然后由项目组管理人员评审代码，没问题后再合入主分支。一般主分支都是没有权限直接推送代码、分支也没办法删除的。阻止小白误操作。
- 2、git branch 查看本地分支是啥
- 3、git branch -a （-a all）查看这个仓库总共有哪些分支、git branch -r 查看所有远程追踪分支
- 4、git checkout -b xxx个人分支 origin/xxx远程的别人的分支（你的同事说，你把我的代码分支拉下来看看。你的同事会告诉你它的分支是什么，你就可以拉下来看看它的代码）
- 5、git add .|某一个具体的文件或者文件夹 把这个文件添加的本地暂存区
- 6、git commit -m "提交日志"，填写提交日志，实现了什么功能，做了什么事？
- 7、git push 远程仓库的名字/origin 仓库名字/分支（不写分支，默认就是main/master）
- 8、git branch -d xxx 删除xxx分支
- 9、git branch -D xxx 强制删除xxx分支
- 10、remotes/origin/main 不是一个本地分支（不像 main），它是 Git 自动管理的，你不能用 git branch -d 直接删掉它。想删除它，你需要清除 Git 对远程的记录。
- 11、分支查看
  ```shell
  git branch        # 只看本地分支
git branch -r     # 只看远程分支
git branch -a     # 所有分支（本地 + 远程）
```
