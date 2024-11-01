
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Phone, Shield, Clock, Wallet, Globe, Truck } from "lucide-react";
import footerBg from '@/assets/footer-bg.png';
import Footer from '@/components/Footer';

export default function AboutPage()
{
    const heroImage = "https://smarttoolsai.com/storage/73/E-commerce-Guide.webp";
    const journeyImage = "https://media.istockphoto.com/id/1444496512/photo/black-businesswoman-working-in-the-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ir0sfzEST0jJlhmnOb_GMnC58AXf1sN99U_sLwafhcU=";
    
    const uspItems = [
      {
        icon: <Wallet className="w-12 h-12 text-primary" />,
        image: "https://media.istockphoto.com/id/1152372225/photo/depositing-check.webp?a=1&b=1&s=612x612&w=0&k=20&c=oAmw6LnjxOFjYgZCnCKDi62qmsrG-lYWHsrc_DdRA-8=",
        title: "Inventory Financing",
        description: "Flexible financing solutions to help you scale your business without capital constraints.",
        bgColor: "bg-green-50"
      },
      {
        icon: <Globe className="w-12 h-12 text-primary" />,
        image: "https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?q=80",
        title: "Multi-Currency Payment Support",
        description: "Seamless transactions in multiple currencies with secure payment processing.",
        bgColor: "bg-green-50"
      },
      {
        icon: <Truck className="w-12 h-12 text-primary" />,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Ct_eqHUquX9j3ovKRcWuRJpTzysZ35LRWQ&s",
        title: "Effortless Logistics",
        description: "End-to-end logistics solutions ensuring timely and secure deliveries across Africa.",
        bgColor: "bg-green-50"
      }
    ];
    return   <div className="min-h-screen bg-gray-50">
    {/* Hero Section */}
    <div className="relative h-[500px] bg-blue-900">
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="African marketplace"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative container mx-auto px-6 py-32">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Who We Are</h1>
        <p className="text-xl text-gray-100 max-w-2xl">
          Welcome to Obana.africa, Sub-Saharan Africa's premier sourcing marketplace platform.
        </p>
      </div>
    </div>

    {/* Journey Section */}
    <div className="container mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Journey</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            What began as Fazsion Wholesales, a distributor of authentic European fashion brands, 
            has evolved into Obana.africa—an ecosystem for B2B e-commerce. Our platform now empowers 
            vendors and businesses with seamless plug-in access for vendors, a dedicated sales force, 
            logistics support, secure payment solutions, and inventory financing options.
          </p>
        </div>
        <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
          <img 
            src={journeyImage}
            alt="Our journey"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Enhanced USP Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Unique Selling Points</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uspItems.map((usp, index) => (
            <Card key={index} className={`overflow-hidden transition-transform duration-300 hover:scale-105 ${usp.bgColor}`}>
              <div className="h-48 relative">
                <img 
                  src={usp.image}
                  alt={usp.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 right-0 p-4 bg-white rounded-tl-xl">
                  {usp.icon}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">{usp.title}</h3>
                <p className="text-gray-600">{usp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-12 mb-20 text-white">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-100 text-lg">
              To be Africa's trusted partner in trade, fostering connections that empower 
              vendors and businesses alike.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-100 text-lg">
              We are here to support African businesses by simplifying global sourcing, 
              making it accessible, reliable, and inclusive.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { title: "Trust", desc: "Built on transparency, authenticity, and integrity." },
            { title: "Collaboration", desc: "Partnering with vendors and businesses to ensure mutual success." },
            { title: "Innovation", desc: "Continuously enhancing our platform to meet evolving trade needs." },
            { title: "Customer-Centricity", desc: "Committed to exceptional service and support for every client." }
          ].map((value, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-shadow duration-300">
              <CardContent>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-white rounded-xl p-12 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${footerBg.src})` }}>
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Button asChild variant="outline" className="bg-white text-blue-900 hover:bg-gray-100 flex items-center gap-2">
            <a href="https://shorturl.at/5Sg8V">
            <MessageCircle className="w-5 h-5" />
            Chat with Us
              </a>
          </Button>
          <Button  asChild variant="outline" className="bg-white text-blue-900 hover:bg-gray-100 flex items-center gap-2">
            <a href="mailto:contact@obana.africa">
            <Mail className="w-5 h-5" />
            contact@obana.africa
                </a>
            
          </Button>
          <Button asChild variant="outline" className="bg-white text-blue-900 hover:bg-gray-100 flex items-center gap-2">
            <a href="tel:+2347035599433">
                <Phone className="w-5 h-5" />
            +234 (0) 123 456 7890
                </a>
          </Button>
        </div>
      </div>
    </div>
<Footer/>
  </div>
}

