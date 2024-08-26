<script setup lang="ts">
  import { computed, reactive, ref } from 'vue';
  import {
    addOrUpdateDataItem,
    DataItemFormModel,
    MyDataItem
  } from '@/api/myDataItem';
  import { FormInstance } from '@arco-design/web-vue';
  import { ClosedFunc } from '@/types/global';

  const emits = defineEmits(['finish']);
  const props = defineProps<{
    record?: MyDataItem;
  }>();
  const formType = computed(() => (props.record ? 'up' : 'add'));
  const modelValue = defineModel<boolean>();

  const generateDefault = () => ({
    name: '',
    remark: ''
  });

  const formModel = reactive<DataItemFormModel>(generateDefault());

  const formRules = {
    name: [{ required: true, message: '请输入' }]
  };

  const formRef = ref<FormInstance>();

  const onClose = () => {
    Object.assign(formModel, generateDefault());
  };

  const onOpen = () => {
    if (props.record) {
      const { name, id, remark } = props.record;
      formModel.name = name;
      formModel.remark = remark;
      formModel.id = id;
    }
  };

  const submit = async (done: ClosedFunc) => {
    const err = await formRef.value?.validate();
    if (err) {
      done(false);
      return;
    }
    await addOrUpdateDataItem(formType.value, formModel).catch((e) => {
      done(false);
      throw new Error(e);
    });
    done(true);
    emits('finish');
  };
</script>

<template>
  <a-drawer
    v-model:visible="modelValue"
    :title="`${formType === 'add' ? '新增' : '编辑'}数据项`"
    :width="440"
    :on-before-ok="submit"
    @open="onOpen"
    @close="onClose"
  >
    <a-form
      ref="formRef"
      :model="formModel"
      layout="vertical"
      class="mt-12px"
      :rules="formRules"
    >
      <a-form-item label="数据项名称" field="name">
        <a-input v-model="formModel.name" placeholder="请输入新工序名称" />
      </a-form-item>
      <a-form-item label="备注">
        <a-textarea
          v-model="formModel.remark"
          placeholder="请输入新工序备注信息"
          :auto-size="{ minRows: 5 }"
        ></a-textarea>
      </a-form-item>
    </a-form>
  </a-drawer>
</template>
