import CampSite from '@/utilities/CampSite';
import Image from 'next/image';

const Camp = () => {
  return (
    <section className=' 2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className='flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
        <CampSite
          backgroundImage='bg-bg-img-1'
          title='Putuk Truno Camp'
          subtitle='Prigen, Pasuruan'
          peopleJoined='50+ Joined'
        />
        <CampSite
          backgroundImage='bg-bg-img-2'
          title='Mountain View Camp'
          subtitle='Somewhere in the Wilderness'
          peopleJoined='50+ Joined'
        />
      </div>

      <div className='flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6'>
        <div className='bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl'>
          <h2 className='regular-24 md:regular-32 2xl:regular-64 capitalize text-white'>
            <strong>Feeling Lost</strong> and Not Knowing The Way?
          </h2>
          <p className='regular-14 xl:regular-16 mt-5 text-white'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, tempora! Accusantium
            odio explicabo dicta, saepe minima ea ab doloribus modi, eveniet culpa fugit excepturi
            voluptatibus! Fugit excepturi asperiores hic unde?
          </p>
          <Image
            src='/quote.svg'
            alt='camp-2'
            width={186}
            height={219}
            className='camp-quote'
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
