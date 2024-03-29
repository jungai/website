---
title: "My vim journey"
timestamp: 1628185684062
desc: ""
tags:
  - "vim"
  - "neovim"
---

สวัสดีครับ ในบทความนี้จะมาเล่าถึงประสบการณ์การใช้ vim มาร่วมๆประมาณ 3 ปีนิดๆครับ

## จุดเริ่มต้น

ย้อนกลับไปประมาณช่วงเรียนปี 4 เทอม 1 สมัยนั้นผมยังใช้ [atom](https://atom.io/) อยู่เลยแล้วรู้สึกเวลาที่เราเขียน code แล้วยกมืออกจาก keyboard ไปจับ mouse มันรู้สึกขัดใจมากๆ จากนั้นก็เริ่มหาพวก shortcut ของ atom มาใช้มากขึ้นเพื่อลดการจับ mouse ให้ได้มากที่สุด หลังจากนั้นก็ไปรู้จัก editor ในตำนานอย่าง [vim](https://www.vim.org/) กับ [emacs](https://www.gnu.org/software/emacs/) ที่โฟกัสไปที่ keyboard เนื่องจากมัน binding key ทุกอย่างไว้กับ keyboard แทบจะหมด ทำให้ไม่จำเป็นต้องจับ mouse

หลังจากที่ลังเลอยู่นานก็ตัดสินใจไป vim ด้วยเริ่มที่ package ของ atom ก่อนชื่อว่า [vim-mode](https://atom.io/packages/vim-mode)

## Vim ครั้งแรก

ความรู้สึกครั้งแรกจากที่ใช้งานคือยากมากๆทั้งตัว shortcut ต่างๆ(ทุกวันนี้ก็ไม่ได้ใช้ทุกอัน) และ vim movement(hjkl) อันนี้คือยากสุดเพราะมันหักจากการใช้ลูกศรมา hjkl ใช้เวลาปรับตัวอยู่นานมากๆกว่าจะเริ่มชิน

หลังจากที่ใช้ atom มาประมาณ1ปี ก็ย้ายมาใช้ [vscode](https://code.visualstudio.com/) และแน่นอนขาดไม่ได้คือ vim extension ใน vscode มี extenstion vim หลายอันแต่อันที่ผมใช้คือ [simple-vim](https://marketplace.visualstudio.com/items?itemName=jpotterm.simple-vim) สาเหตุที่ใช้ตัวนี้ก็เพราะตัว [vim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim) ที่คนใช้เยอะๆ ผมใช้แล้วมันมี input lag(เป็นเฉพาะใน mac, linux แต่ window wsl ไม่มี input lag งงมาก 🧐)

## Real Vim

หลังจากที่ใช้ vscode มาสักพักผมก็อยากจะลองย้ายมาใช้ vim จริงๆที่เป็น text edtior ก็หาข้อมูลอยู่นานและแล้วก็ได้ลองย้ายมา vim จริงๆ แต่เนื่องจากตอนนั้นที่ผมใช้ [CoC](https://github.com/neoclide/coc.nvim) แล้วมีปัญหากับตัว typescript ปัญหาก็คือตัว tsserver มันช้ามาก(ตอนนั้น CoC ยังใช้ node v8 ประมาณ2ปีก่อน)ในบาง feature เช่น `go_to_defination` ซึ่งมันเกิดปัญหา timeout เกิดขึ้นทำให้รู้สึกว่ายังไม่โอเคกับการย้ายมา vim ก็เลยเลือกกลับไป vscode

## ปัจจุบัน

ณ ตอนนี้ก็ยังใช้ vscode เป็นหลักแต่กำลังจะ migrate ไป [neovim](https://neovim.io/) หลังจากที่ลองใช้ตัว nightly(0.5) มาสักพักแล้วรู้สึกว่ามันสามารถใช้แทน vscode เกือบจะได้แล้วและปัจจุบันก็ official release ออกมาแล้วพร้อมพวก feature ดีๆ เช่น native-lsp, build in tree-sitter เป็นต้น

## สรุป

vim เป็น text editor ที่มีมานานมากๆแล้วและคนก็ยังใช้กันเยอะอยู่และในปัจจุบันก็มีคนทำ extention ใน modern text edtior มากมาย การที่เรารู้พวก shortcut ต่างๆของ vim สามารถช่วยเพิ่มความไวในการเขียน code, ลดการจับเมาส์(มือแถบจะอยู่ที่ keyboard ตลอด)

นอกจาก text editor แล้วผมยังลงไว้กับพวก terminal, browser อีกด้วยย(รักขนาดนี้ O_O)