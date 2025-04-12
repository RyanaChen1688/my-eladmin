# my-eladmin
我的vue后台管理系统学习项目

### 先把本地的代码和远程仓库进行管理
- 掌握git的使用，给本地代码添加远程仓库地址
- 1、保证你本地安装了git工具
- 2、需要使用git remote list，我当前本地的项目关联了哪些远程地址
- 3、需要使用git remote add 远程名字github|gitee|origin 远程仓库的地址（https://github.com/用户名/仓库名字.git）
- 4、git remote remove 远程名字
- 5、git remote rename 远程名字 远程新名字
- 6、git remote 远程名字 新的url远程仓库地址

### 推送本地代码到远程仓库
- 0、git checkout -b xxx个人分支 (checkout检出、-b branch分支)公司项目开发代码都是提交到个人分支上。然后由项目组管理人员评审代码，没问题后再合入主分支。一般主分支都是没有权限直接推送代码、分支也没办法删除的。阻止小白误操作。
- 1、git add .|某一个具体的文件或者文件夹 把这个文件添加的本地暂存区
- 2、git commit -m "提交日志"，填写提交日志，实现了什么功能，做了什么事？
- 3、git push 远程仓库的名字/origin 仓库名字/分支（不写分支，默认就是main/master）
