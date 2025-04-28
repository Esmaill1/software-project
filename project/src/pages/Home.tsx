import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Search, ArrowRight } from 'lucide-react';
import LevelCard from '../components/LevelCard';
import { levels } from '../data/levels';

const Home: React.FC = () => {
  // Simple animation on component mount
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => observer.observe(el));
    
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/247819/pexels-photo-247819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-on-scroll opacity-0 transition-all duration-1000 delay-300 translate-y-8">
              Organize Your <span className="text-yellow-300">Academic Journey</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 animate-on-scroll opacity-0 transition-all duration-1000 delay-500 translate-y-8">
              A comprehensive platform for students to access, organize, and share educational materials across all academic levels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll opacity-0 transition-all duration-1000 delay-700 translate-y-8">
              <Link
                to="/level/1"
                className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors duration-300 inline-flex items-center"
              >
                <BookOpen className="h-5 w-5 mr-2" />
                Browse Materials
              </Link>
              <button className="bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors duration-300 inline-flex items-center">
                <Search className="h-5 w-5 mr-2" />
                Search Materials
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-16 right-0 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-300/20 rounded-full blur-xl"></div>
      </section>
      
      {/* Academic Levels Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Academic Levels</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Browse through our organized collection of educational materials, categorized by academic level and subject.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {levels.map((level, index) => (
              <div key={level.id} className="animate-on-scroll opacity-0 transition-all duration-700" style={{ transitionDelay: `${index * 100 + 300}ms` }}>
                <LevelCard level={level} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Platform Features</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our platform is designed to enhance your study experience with a variety of helpful features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-6 rounded-xl bg-blue-50 dark:bg-gray-700 animate-on-scroll opacity-0 transition-all duration-700 delay-300">
              <div className="bg-blue-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Organized Content</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Materials are neatly organized by academic level, subject, and topic for easy navigation.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-purple-50 dark:bg-gray-700 animate-on-scroll opacity-0 transition-all duration-700 delay-500">
              <div className="bg-purple-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Smart Search</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Find exactly what you need with our powerful search functionality.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-teal-50 dark:bg-gray-700 animate-on-scroll opacity-0 transition-all duration-700 delay-700">
              <div className="bg-teal-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Latest Resources</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Access up-to-date study materials, lecture notes, and resources for all subjects.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-on-scroll opacity-0 transition-all duration-1000">Ready to enhance your learning experience?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-on-scroll opacity-0 transition-all duration-1000 delay-200">
            Start exploring our comprehensive collection of academic resources now.
          </p>
          <Link
            to="/level/2"
            className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-colors duration-300 inline-flex items-center animate-on-scroll opacity-0 transition-all duration-1000 delay-400"
          >
            Explore Level 2 Materials
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;