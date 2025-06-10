<template>
    <el-scrollbar style="flex: 1;">
         <el-space wrap>
            <ProfieldCard :avatar="zyk" name="ZouYK" position="形式组长" bio="长得帅、考得好、体育强、打游戏厉害" />
        <ProfieldCard :avatar="zsm" name="ZhengSM" position="实际组长" bio="人美心善有实力,项目实际组织者" />
        <ProfieldCard :avatar="hl" name="HeL" position="核心成员" bio="演讲答辩首发，颜值担当" />
        <ProfieldCard :avatar="wx" name="WengX" bio="超漂亮小姐姐一枚" />
        <ProfieldCard :avatar="zx" name="ZhangX" bio="冷静且帅哥" />
        <ProfieldCard :avatar="wxy" name="WangXY" bio="稳重且忙碌" />
        <ProfieldCard :avatar="mino" name="Mino" bio="神秘的Mino" />
        <ProfieldCard :avatar="a" name="友人A" position="." bio="逃跑の拖油瓶" />
       </el-space>
        
    </el-scrollbar>
</template>
<script lang='ts' setup>
import ProfieldCard from '@/components/ProfileCard.vue'
import zyk from "@/asset/team/zyk.jpg"
import zsm from "@/asset/team/zsm.jpg"
import wx from "@/asset/team/wx.jpg"
import zx from "@/asset/team/zx.jpg"
import hl from "@/asset/team/hl.jpg"
import wxy from "@/asset/team/wxy.jpg"
import mino from "@/asset/team/Mino.jpg"
import a from "@/asset/team/a.png"



</script>
