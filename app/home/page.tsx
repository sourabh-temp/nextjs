import React from 'react'
import Header from '@/components/Header'
import ProductCategory from '@/components/ProductCategory'
import ImageSlider from '@/components/ImageSlider'
import ProductCard from '@/components/ProductCard'
import Footer from '@/components/Footer'
import SubFooter from '@/components/SubFooter'

const page = () => {
  return (
    <>
      <Header />
      <ProductCategory />
      <ImageSlider />
      <ProductCard />
      <Footer />
      <SubFooter />
    </>
  );
};

export default page