'use client';
import JobDescriptionGenerator from '@/components/JobDescriptionGenerator/jobdescriptiongenerator';
import Sidebar from '@/components/Sidebar/sidebar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-[auto_1fr] text-slate-900 justify-center gap-4 overflow-hidden">
      <Sidebar></Sidebar>
      <div className="h-[calc(100vh_-_2rem)] w-full overflow-y-scroll">
        <div className="min-h-screen w-full ">
          <div className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-6 sm:mt-6">
            <section className="py-10 lg:py-6 ">
              <JobDescriptionGenerator></JobDescriptionGenerator>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
