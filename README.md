# ��װ��ƴ

����һ��vueƽ̨����������װ��ƽ̨

## ժҪ

����Ŀ������һ�����ռ�װ����ά���ӻ�����װ��ƽ̨������Vue3ǰ�˿��ʵ��ģ�黯���������Web Worker���м��㡢Three.js��ά��Ⱦ���Ŵ��㷨�Ż��ȼ�����ϵͳ������װ��⡢����⡢װ�䷽�����ӻ��Ⱥ���ģ�飬ʵ�ִӻ������ݹ�������װ���ȫ���̽��������

------

## �����ܹ�

### 1. ǰ�˼���ջ

- **Vue3���**������Composition APIʵ�����������
- **״̬����**��Piniaʵ�ֿ����״̬����Module/Box/Container Store��
- **��ά���ӻ�**������Three.js��TresJS��ʵ��3D��Ⱦ
- **���ݿ��ӻ�**��EChartsʵ�ֻ���ֲ�ͳ�ƿ��ӻ�
- **UI���**��Element Plus��������ϵͳ����
- **fontawesomeͼ���**��fontawesomeͼ�����ƽ��棬���ͳһ�������û�����

### 2. �����㷨

- **Web Workers**����װ������߼����ڶ����߳�ִ��

```typescript
// mainWorkPage.vue�еļ������
const result = await MainCalculate(finalForm) // ͨ��Workerִ��
```

- **�Ŵ��㷨**����worker�߳�ʵ�ּ�װ��ռ��Ż��㷨

### 3. ��ά����

- **TresJS**������Three.js������ʽ��ά���

```vue
<!-- tres3dprop.vue ���Ľṹ -->
<TresCanvas>
  <TresPerspectiveCamera :position="bestView"/>
  <OrbitControls :target="modulecenter"/>
  <TresMesh v-for="(box, index) in props.boxes">
    <TresBoxGeometry :args="box.size"/>
    <TresMeshToonMaterial :color="box.color"/>
  </TresMesh>
</TresCanvas>
```

------

## ϵͳ�������

### 1. ģ�黯�ܹ����

- �ֿ����ģ�飺����ά����װ�䡢���װ�䵥Ԫ����
- ����̨ģ�飺���ɿ��ӻ����������ܼ���
- 3Dչʾģ�飺֧�ֶ��ӽ��л����������Գ���

### 2. �����Ż�����

1. **���м���ܹ�**

```typescript
// Web Workerͨ��
const worker = new Worker('@/workers/calculation.js')
worker.postMessage({ container: finalForm })
worker.onmessage = (e) => { /* ������ */ }
```

2. **�ڴ����**

- ����ع�����άʵ��
- ������ز�����Դ

------

## �ؼ�ʵ�ּ���

### 1. ��ά�ռ����ϵͳ

1. **��ά��Ⱦ�Ż�**

- �Զ�����ӽǼ���
- ���ڰ�Χ�е���Ⱦ�Ż�
- Outline���ڴ���Ч��

```typescript
// show3d.ts �����ඨ��
export class box {
  constructor(
    public size: [number, number, number],
    public centerPosition: [number, number, number],
    public mass: number,
    public color: string = '#FFFFFF'
  ) {}
}

// ��������ʵʱ����
const centerOfGravity = computed(() => {
  /* �����������Եļ����߼� */
});
```

### 2. ����װ���㷨

- ��Ŀ���Ż������������ �� ����ƽ��
- ��ȫ�Է������������ƫ��������
- Լ����������
	- �����������
	- ����ڷŷ���Լ��
	- �ȶ���Լ��

------

## Ӧ�ü�ֵ

1. ���ջ�������������װ��ռ�������15%-30%
2. ������ѧ������ά���ӻ�������ѧ����
3. ��ҵ��������Ϊ���������ṩ�������

------

## �ܽ���չ��

��ϵͳ�����Եؽ�Web��ά�����������㷨��ϣ������˾���ʵ�ü�ֵ�ĺ��ռ�װ��װ����������δ������չAR���ӻ�����Ŀ���Ż��㷨��ǿ�ȷ��򣬳�������ϵͳ�Ĺ�ҵӦ�ü�ֵ��
