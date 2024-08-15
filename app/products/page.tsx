'use client';

import useCountStore from '@/stores/countStore';
import React from 'react';

export default function page() {
  const countStore = useCountStore();
  return <div>{countStore.count}</div>;
}
