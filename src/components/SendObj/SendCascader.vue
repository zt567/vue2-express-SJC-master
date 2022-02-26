<template>
  <div>
    <SendPage />
    <el-cascader
      v-model="sendvalue"
      multiple:true
      placeholder="填選寄件人"
      :options="sendoptions"
    >
    </el-cascader>
    <el-cascader
      v-model="recivalue"
      multiple:true
      placeholder="填選收件人"
      :options="recioptions"
    >
    </el-cascader>
    <WebCam />
  </div>
</template>
<script>
import SendPage from "./SendPage.vue";
import WebCam from "../WebCam.vue";
export default {
  name: "SendCascader",
  components: {
    WebCam: WebCam,
    SendPage: SendPage,
  },
  data() {
    return {
      sendvalue: [],
      sendoptions: [
        {
          value: "vistor",
          label: "訪客(寄)",
        },
        {
          value: "",
          label: "S1~S5(寄)",
          children: [
            {
              value: "S1",
              label: "176號S1",
            },
            {
              value: "S2",
              label: "172號S2",
            },
            {
              value: "S3",
              label: "170號S3",
            },
            {
              value: "S5",
              label: "168號S5",
            },
          ],
        },
        {
          value: "A",
          label: "A棟178號(寄)",
          children: [
            {
              value: "1F",
              label: "1樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "2F",
              label: "2樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "3F",
              label: "3樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "4F",
              label: "4樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "5F",
              label: "5樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "6F",
              label: "6樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "7F",
              label: "7樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "8F",
              label: "8樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "9F",
              label: "9樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "10F",
              label: "10樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "11F",
              label: "11樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "12F",
              label: "12樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "13F",
              label: "13樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "14F",
              label: "14樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
          ],
        },

        {
          value: "B",
          label: "B棟180號(寄)",
          children: [
            {
              value: "1F",
              label: "1樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "2F",
              label: "2樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "3F",
              label: "3樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "4F",
              label: "4樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "5F",
              label: "5樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "6F",
              label: "6樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "7F",
              label: "7樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "8F",
              label: "8樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "9F",
              label: "9樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "10F",
              label: "10樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "11F",
              label: "11樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "12F",
              label: "12樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "13F",
              label: "13樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "14F",
              label: "14樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
          ],
        },
      ],
      recivalue: [],
      recioptions: [
        {
          value: "vistor",
          label: "訪客(收)",
        },
        {
          value: "SS",
          label: "S1~S5(收)",
          children: [
            {
              value: "S1",
              label: "176號S1",
            },
            {
              value: "S2",
              label: "172號S2",
            },
            {
              value: "S3",
              label: "170號S3",
            },
            {
              value: "S5",
              label: "168號S5",
            },
          ],
        },
        {
          value: "A",
          label: "A棟178號(收)",
          children: [
            {
              value: "1F",
              label: "1樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "2F",
              label: "2樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "3F",
              label: "3樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "4F",
              label: "4樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "5F",
              label: "5樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "6F",
              label: "6樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "7F",
              label: "7樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "8F",
              label: "8樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "9F",
              label: "9樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "10F",
              label: "10樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "11F",
              label: "11樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "12F",
              label: "12樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "13F",
              label: "13樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "14F",
              label: "14樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
          ],
        },

        {
          value: "B",
          label: "B棟180號(收)",
          children: [
            {
              value: "1F",
              label: "1樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "2F",
              label: "2樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "3F",
              label: "3樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "4F",
              label: "4樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "5F",
              label: "5樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "6F",
              label: "6樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "7F",
              label: "7樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "8F",
              label: "8樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "9F",
              label: "9樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "10F",
              label: "10樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "11F",
              label: "11樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "12F",
              label: "12樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "13F",
              label: "13樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
            {
              value: "14F",
              label: "14樓",
              children: [
                {
                  value: "n1",
                  label: "之1",
                },
                {
                  value: "n2",
                  label: "之2",
                },
                {
                  value: "n3",
                  label: "之3",
                },
                {
                  value: "n5",
                  label: "之5",
                },
                {
                  value: "n6",
                  label: "之6",
                },
                {
                  value: "n7",
                  label: "之7",
                },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>
<style >

.el-cascader{
}
.el-cascader .el-input__inner {
  text-align: center;
  font-size: 50px;
  line-height: 50px;
  width: 700px;
  height: 100px;
}
.el-cascader-menu__wrap {
  text-align: center;
  width: 330px;
  height: 250px;
}
.el-cascader-panel {
  font-size: 37px;
}
.el-cascader-node {
  margin-top: 19px;
}
</style>