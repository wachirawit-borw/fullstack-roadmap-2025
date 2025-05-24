// src/components/Card.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    image: 'https://picsum.photos/400/300',
    title: 'สินค้าใหม่ล่าสุด',
    description: 'การ์ดนี้คือการ์ดตัวอย่างที่แสดงการจัด Layout ด้วย Tailwind CSS.',
    showButton: true,
  },
};

export const NoButton: Story = {
  args: {
    image: 'https://picsum.photos/400/300?grayscale',
    title: 'แสดงข้อมูลอย่างเดียว',
    description: 'ไม่แสดงปุ่ม ดูเพิ่มเติม เพื่อใช้ในการ preview อย่างเดียว',
    showButton: false,
  },
};

export const LongDescription: Story = {
  args: {
    image: 'https://picsum.photos/400/300?blur',
    title: 'รายละเอียดเยอะ',
    description:
      'นี่คือตัวอย่างของการ์ดที่มีคำอธิบายยาวมากเพื่อดูว่าข้อความจัดเรียงได้ดีหรือไม่ในพื้นที่ที่จำกัด.',
    showButton: true,
  },
};
