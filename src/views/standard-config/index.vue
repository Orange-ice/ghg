<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import { onMounted, ref } from 'vue';
  import StandardRemark from '@/views/standard-config/components/StandardRemark.vue';
  import StandardConfirm from '@/views/standard-config/components/StandardConfirm.vue';

  const router = useRouter();

  // 查看备注（协助选择标准）
  const remarkVisible = ref(false);

  // 确定标准选择
  const confirmVisible = ref(false);

  const goBack = () => {
    // 暂时回到【标准管理】，新用户需要回到工作台
    router.push({ name: 'standardDisplay' });
  };

  const calcHeight = (length: number) => {
    return `${Math.ceil(length / 3) * 180}px`;
  };

  // 协助选择标准
  const assistRemark = () => {
    remarkVisible.value = true;
  };

  // 选择标准
  const standardSelect = () => {
    confirmVisible.value = true;
  };

  const data = ref<any[]>([]);
  onMounted(() => {
    data.value = [
      {
        type: '',
        name: '中国碳核算标准或指南',
        children: [
          {
            name: '中国碳核算标准',
            desc: '这是一条对中国碳标准核算的描述填充文本这是一条对中国碳标准核算的描述填充文本',
          },
          {
            name: '中国碳核算标准',
            desc: '这是一条对中国碳标准核算的描述填充文本这是一条对中国碳标准核算的描述填充文本',
          },
          {
            name: '中国碳核算标准',
            desc: '这是一条对中国碳标准核算的描述填充文本这是一条对中国碳标准核算的描述填充文本',
          },
          {
            name: '中国碳核算标准',
            desc: '这是一条对中国碳标准核算的描述填充文本这是一条对中国碳标准核算的描述填充文本',
          },
          {
            name: '中国碳核算标准',
            desc: '这是一条对中国碳标准核算的描述填充文本这是一条对中国碳标准核算的描述填充文本',
          },
          {
            name: '中国碳核算标准',
            desc: '这是一条对中国碳标准核算的描述填充文本这是一条对中国碳标准核算的描述填充文本',
          },
        ],
      },
      {
        type: '',
        name: '中国碳核算标准或指南',
        children: [
          {
            name: '中国碳核算标准',
            desc: '这是一条对中国碳标准核算的描述填充文本这是一条对中国碳标准核算的描述填充文本',
          },
          {
            name: '中国碳核算标准',
            desc: '这是一条对中国碳标准核算的描述填充文本这是一条对中国碳标准核算的描述填充文本',
          },
          {
            name: '中国碳核算标准',
            desc: '这是一条对中国碳标准核算的描述填充文本这是一条对中国碳标准核算的描述填充文本',
          },
          {
            name: '中国碳核算标准',
            desc: '这是一条对中国碳标准核算的描述填充文本这是一条对中国碳标准核算的描述填充文本',
          },
        ],
      },
      {
        type: '',
        name: '中国碳核算标准或指南',
        children: [
          {
            name: '中国碳核算标准',
            desc: '这是一条对中国碳标准核算的描述填充文本这是一条对中国碳标准核算的描述填充文本',
          },
          {
            name: '中国碳核算标准',
            desc: '这是一条对中国碳标准核算的描述填充文本这是一条对中国碳标准核算的描述填充文本',
          },
        ],
      },
      {
        type: '',
        name: '中国碳核算标准或指南',
        children: [
          {
            name: '中国碳核算标准',
            desc: '这是一条对中国碳标准核算的描述填充文本这是一条对中国碳标准核算的描述填充文本',
          },
          {
            name: '中国碳核算标准',
            desc: '这是一条对中国碳标准核算的描述填充文本这是一条对中国碳标准核算的描述填充文本',
          },
          {
            name: '中国碳核算标准',
            desc: '这是一条对中国碳标准核算的描述填充文本这是一条对中国碳标准核算的描述填充文本',
          },
        ],
      },
    ];

    data.value.forEach((item) => {
      if (item.children.length) {
        item.expand = false;
      }
    });
  });
</script>

<!--<template>-->
<!--  <div>-->
<!--    标准配置 - 选择标准 <br />-->
<!--    <a-button @click="$router.push({ name: 'standardDisplay' })">返回</a-button>-->
<!--    <a-button type="primary" @click="$router.push({ name: 'standardArea' })"-->
<!--      >地区</a-button-->
<!--    >-->
<!--    <a-button @click="$router.push({ name: 'standardIndustry' })"-->
<!--      >行业</a-button-->
<!--    >-->
<!--  </div>-->
<!--</template>-->

<template>
  <div class="standard-select">
    <div class="header">
      <iconpark-icon name="back" class="icon" @click="goBack" />
      <span>欢迎使用积木碳云，请选择核算标准</span>
    </div>

    <div class="content">
      <div
        v-for="(category, index) in data"
        :key="index"
        class="standard-wrapper"
      >
        <div
          class="category"
          :style="{
            height: calcHeight(category.expand ? category.children.length : 3),
          }"
        >
          <iconpark-icon name="dot" class="symbol" />
          <span class="title">核算标准</span>
          <span class="name">{{ category.name }}</span>
          <div
            v-if="category.children.length > 3"
            class="expand"
            @click="category.expand = !category.expand"
          >
            <span>{{ category.expand ? '收起' : '展开' }}全部标准</span>
            <iconpark-icon
              :name="category.expand ? 'collect' : 'expand'"
              class="icon"
            />
          </div>
        </div>
        <div
          class="list"
          :style="{
            height: calcHeight(category.expand ? category.children.length : 3),
          }"
        >
          <div
            v-for="(standard, i) in category.expand
              ? category.children
              : category.children.slice(0, 3)"
            :key="i"
            class="list-item"
          >
            <img src="@/assets/images/standard.png" alt="" />
            <div>
              <h3 class="name">{{ standard.name }}</h3>
              <p class="desc">
                {{ standard.desc }}
              </p>

              <div class="operation">
                <div @click="standardSelect">
                  <span>使用此标准</span>
                  <iconpark-icon class="icon" name="standard-confirm" />
                </div>
                <div @click="assistRemark">
                  <span> 需要协助选择标准？ </span>
                  <iconpark-icon class="icon" name="standard-help" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <StandardRemark v-model="remarkVisible" />
  <StandardConfirm v-model="confirmVisible" />
</template>

<style lang="less" scoped>
  @border-color: #e9f0ed;

  .standard-select {
    padding: 30px 24px 48px;
    background-image: url('@/assets/images/standard-select-bg.png');
    background-size: cover;
    height: 100%;
    overflow: auto;

    .header {
      display: flex;
      align-items: center;
      margin-bottom: 30px;

      .icon {
        font-size: 32px;
        width: 32px;
        height: 32px;
        margin-right: 4px;
        cursor: pointer;
      }

      > span {
        font-size: 24px;
        color: var(--text-1);
        line-height: 32px;
        text-align: justify;
        font-style: normal;
      }
    }

    .content {
      .standard-wrapper {
        //background: #f3f8f9;
        border: solid 2px var(--color-white);
        border-radius: 8px;

        display: flex;

        &:not(:first-child) {
          margin-top: 24px;
        }

        .category {
          flex-shrink: 0;
          width: 264px;
          min-height: 180px;
          padding: 42px 32px;
          border-radius: 8px 0 0 8px;
          backdrop-filter: blur(6px);
          background: radial-gradient(
            263% 157% at 100% -9%,
            #a9e9c5 0%,
            #087d6b 45%,
            #054138 100%
          );
          display: flex;
          flex-direction: column;
          color: var(--color-white);
          position: relative;

          transition: height 0.3s;

          .symbol {
            position: absolute;
            left: 24px;
            top: 24px;
            width: 40px;
            height: 32px;
            font-size: 40px;
          }

          .title {
            font-size: 18px;
            line-height: 20px;
            margin-bottom: 4px;
          }

          .name {
            font-weight: 600;
            font-size: 18px;
            line-height: 20px;
          }

          .expand {
            font-size: 12px;
            line-height: 20px;
            position: absolute;
            bottom: 24px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            align-items: center;
            cursor: pointer;
            user-select: none;

            .icon {
              font-size: 16px;
              width: 16px;
              height: 16px;
            }
          }
        }

        .list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          flex-grow: 1;
          transition: height 0.3s;

          &-item {
            height: 180px;
            padding: 40px 32px;
            display: flex;
            align-items: flex-start;
            position: relative;
            transition: all 0.3s;

            // 每行的中间元素
            &:nth-child(3n-1) {
              border-left: solid 1px @border-color;
              border-right: solid 1px @border-color;
            }

            > img {
              width: 36px;
              margin-right: 12px;
              transition: all 0.3s;
            }

            .name,
            .desc {
              margin: 0;
              transition: all 0.3s;
            }

            .name {
              font-size: 18px;
              color: #000000;
              line-height: 24px;
              margin-bottom: 8px;
            }

            .desc {
              font-size: 13px;
              color: var(--color-text-3);
              line-height: 20px;
            }

            .operation {
              display: flex;
              color: #054138;
              bottom: 20px;
              position: absolute;
              opacity: 0;
              transition: all 0.3s;

              > div {
                display: flex;
                align-items: center;
                cursor: pointer;
                user-select: none;

                &:first-child {
                  margin-right: 24px;
                }

                .icon {
                  font-size: 16px;
                  width: 16px;
                  height: 16px;
                  margin-left: 2px;
                }
              }
            }

            &:hover {
              background: rgba(255, 255, 255, 0.2);
              box-shadow: 0 15px 30px 0 rgba(8, 68, 46, 0.12),
                -1px -1px 0px 0px rgba(248, 254, 251, 0.5);

              > img,
              .name,
              .desc {
                transform: translateY(-16px);
              }

              .operation {
                opacity: 1;
              }
            }
          }
        }

        // 第二行开始的元素(第三个元素之后的)
        .list .list-item:nth-child(3) ~ .list-item {
          border-top: solid 1px @border-color;
        }
      }
    }
  }
</style>
