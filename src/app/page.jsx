import PixelExperience from '../components/PixelExperience';
import HomeSections from '../components/HomeSections';

export default function Home() {
  return (
    <main>
      {/* 1. HERO SECTION (100% UNTOUCHED AS REQUESTED) */}
      <PixelExperience />

      {/* 2. ALL HOME SECTIONS MATCHING USER REFERENCE IMAGE */}
      <HomeSections />
    </main>
  );
}
