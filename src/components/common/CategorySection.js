'use client';

import Link from 'next/link';
import { Droplet, Smartphone, Zap, Package } from 'lucide-react';

const categories = [
  {
    id: 'liquid',
    name: '액상',
    icon: Droplet,
    color: 'bg-blue-500',
    hoverColor: 'hover:bg-blue-600',
  },
  {
    id: 'device',
    name: '기기',
    icon: Smartphone,
    color: 'bg-purple-500',
    hoverColor: 'hover:bg-purple-600',
  },
  {
    id: 'coil',
    name: '코일',
    icon: Zap,
    color: 'bg-orange-500',
    hoverColor: 'hover:bg-orange-600',
  },
  {
    id: 'accessory',
    name: '액세서리',
    icon: Package,
    color: 'bg-green-500',
    hoverColor: 'hover:bg-green-600',
  },
];

export default function CategorySection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">카테고리</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.id}
                href={`/products?category=${category.id}`}
                className="group"
              >
                <div className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div
                    className={`${category.color} ${category.hoverColor} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
                    {category.name}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
