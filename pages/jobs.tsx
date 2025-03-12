import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { ImgJobs } from '../components/media/ImgJobs';

const Jobs: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Budtender Job Opening at Our Cannabis Shop - Green Ghost 🌿👻
        </title>
        <meta
          name="description"
          content="Passionate about cannabis? Green Ghost 🌿👻 is hiring a Budtender! Join our team, share your expertise, and deliver exceptional service to our community. Apply now!"
        />
        <meta
          property="og:title"
          content="Budtender Job Opening at Our Cannabis Shop - Green Ghost 🌿👻"
        />
        <meta
          property="og:description"
          content="Passionate about cannabis? Green Ghost 🌿👻 is hiring a Budtender! Join our team, share your expertise, and deliver exceptional service to our community. Apply now!"
        />
        <meta
          property="og:image"
          content="https://green.gd/media/green-ghost-degen-weed-shop-jobs.webp"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta property="og:url" content="https://green.gd/jobs" />
        <meta
          name="twitter:title"
          content="Budtender Job Opening at Our Cannabis Shop - Green Ghost 🌿👻"
        />
        <meta
          name="twitter:description"
          content="Passionate about cannabis? Green Ghost 🌿👻 is hiring a Budtender! Join our team, share your expertise, and deliver exceptional service to our community. Apply now!"
        />
        <meta
          name="twitter:image"
          content="https://green.gd/media/green-ghost-degen-weed-shop-jobs.webp"
        />
        <meta name="twitter:url" content="https://green.gd/jobs" />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <Box as="section" my={4}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            my={4}
            lineHeight={1}
          >
            <ImgJobs />
            <HomeSectionTitle title="Jobs" />
          </Box>
          <Text
            as="p"
            fontSize={{ base: '3xl' }}
            lineHeight={1}
            fontFamily="vt323"
            mb={10}
            textAlign={'center'}
          >
            {
              "At Green Ghost 🌿👻, we pride ourselves on providing premium cannabis products and exceptional service. As part of our team, you'll play a vital role in creating an inviting and educational experience for our customers while promoting our commitment to quality and compliance."
            }
          </Text>
          <Box
            display="flex"
            flexDirection={{ base: 'column', lg: 'row' }}
            justifyContent={{ base: 'start', lg: 'start' }}
            alignItems={{ base: 'start', lg: 'start' }}
            mb={10}
          >
            <Box textAlign="left" fontFamily="CubicFive12">
              <Text
                as="h2"
                fontSize="xl"
                mb={2}
                color={'ghostVerse.green.base'}
              >
                Budtender
              </Text>
              <Text
                as="p"
                fontSize={{ base: '3xl' }}
                lineHeight={1}
                fontFamily="vt323"
                mb={5}
              >
                {
                  "As a Budtender, you’ll be the face of our shop, guiding customers through our extensive cannabis menu, answering questions, and ensuring they find products that suit their needs. You'll maintain a welcoming environment, handle transactions efficiently, and contribute to the success of the store by delivering outstanding customer service."
                }
              </Text>
              <Box
                as="div"
                aria-labelledby="Responsibilities"
                w={{ base: '100%', lg: '100%' }}
                bgColor="ghostVerse.dark.lighter"
                p={5}
                mb={{ base: 2, lg: 2 }}
              >
                <Text
                  as="h3"
                  fontSize="md"
                  mb={1}
                  color={'ghostVerse.green.base'}
                >
                  Responsibilities
                </Text>
                <Text
                  as="p"
                  fontSize={{ base: '2xl' }}
                  lineHeight={1}
                  fontFamily="vt323"
                  mb={2}
                >
                  {
                    '> Greet customers warmly, answer their questions, and provide recommendations based on their preferences.'
                  }
                </Text>
                <Text
                  as="p"
                  fontSize={{ base: '2xl' }}
                  lineHeight={1}
                  fontFamily="vt323"
                  mb={2}
                >
                  {
                    '> Stay informed about our products, including strains, edibles, concentrates, and accessories.'
                  }
                </Text>
                <Text
                  as="p"
                  fontSize={{ base: '2xl' }}
                  lineHeight={1}
                  fontFamily="vt323"
                  mb={2}
                >
                  {
                    '> Assist customers with purchases, handle transactions accurately, and promote special deals.'
                  }
                </Text>
                <Text
                  as="p"
                  fontSize={{ base: '2xl' }}
                  lineHeight={1}
                  fontFamily="vt323"
                  mb={2}
                >
                  {
                    '> Adhere to all local and state regulations, including verifying customer age and legal purchasing limits.'
                  }
                </Text>
                <Text
                  as="p"
                  fontSize={{ base: '2xl' }}
                  lineHeight={1}
                  fontFamily="vt323"
                  mb={2}
                >
                  {'> Ensure the store is clean, organized, and well-stocked.'}
                </Text>
                <Text
                  as="p"
                  fontSize={{ base: '2xl' }}
                  lineHeight={1}
                  fontFamily="vt323"
                  mb={2}
                >
                  {
                    '> Work closely with other staff members to create a smooth and efficient workflow.'
                  }
                </Text>
              </Box>
              <Box
                as="div"
                aria-labelledby="Responsibilities"
                w={{ base: '100%', lg: '100%' }}
                bgColor="ghostVerse.dark.lighter"
                p={5}
                mb={{ base: 2, lg: 2 }}
              >
                <Text
                  as="h3"
                  fontSize="md"
                  mb={1}
                  mt={4}
                  color={'ghostVerse.green.base'}
                >
                  What We’re Looking For
                </Text>
                <Text
                  as="p"
                  fontSize={{ base: '2xl' }}
                  lineHeight={1}
                  fontFamily="vt323"
                  mb={2}
                >
                  {'> A genuine interest in cannabis culture and products.'}
                </Text>
                <Text
                  as="p"
                  fontSize={{ base: '2xl' }}
                  lineHeight={1}
                  fontFamily="vt323"
                  mb={2}
                >
                  {
                    '> Excellent communication and interpersonal skills to create a welcoming atmosphere.'
                  }
                </Text>
                <Text
                  as="p"
                  fontSize={{ base: '2xl' }}
                  lineHeight={1}
                  fontFamily="vt323"
                  mb={2}
                >
                  {
                    '> Ability to handle transactions accurately and maintain compliance with industry regulations.'
                  }
                </Text>
                <Text
                  as="p"
                  fontSize={{ base: '2xl' }}
                  lineHeight={1}
                  fontFamily="vt323"
                  mb={2}
                >
                  {
                    '> A collaborative mindset to work effectively with the Green Ghost crew.'
                  }
                </Text>
                <Text
                  as="p"
                  fontSize={{ base: '2xl' }}
                  lineHeight={1}
                  fontFamily="vt323"
                  mb={2}
                >
                  {
                    '> Must be 21+ and meet all local legal requirements for employment in the cannabis industry.'
                  }
                </Text>
              </Box>
              <Box
                as="div"
                aria-labelledby="Responsibilities"
                w={{ base: '100%', lg: '100%' }}
                bgColor="ghostVerse.dark.lighter"
                p={5}
                mb={{ base: 2, lg: 2 }}
              >
                <Text
                  as="h3"
                  fontSize="md"
                  mb={1}
                  mt={4}
                  color={'ghostVerse.green.base'}
                >
                  Why Join Green Ghost?
                </Text>
                <Text
                  as="p"
                  fontSize={{ base: '2xl' }}
                  lineHeight={1}
                  fontFamily="vt323"
                  mb={2}
                >
                  {
                    'At Green Ghost, we’re more than a cannabis shop; we’re a community. Here’s what you’ll enjoy as part of our team:'
                  }
                </Text>
                <Text
                  as="p"
                  fontSize={{ base: '2xl' }}
                  lineHeight={1}
                  fontFamily="vt323"
                  mb={2}
                >
                  {'> Rewarding compensation for your hard work.'}
                </Text>
                <Text
                  as="p"
                  fontSize={{ base: '2xl' }}
                  lineHeight={1}
                  fontFamily="vt323"
                  mb={2}
                >
                  {'> Exclusive discounts on our premium cannabis products.'}
                </Text>
                <Text
                  as="p"
                  fontSize={{ base: '2xl' }}
                  lineHeight={1}
                  fontFamily="vt323"
                  mb={2}
                >
                  {
                    '> Professional development and cannabis education to advance your career.'
                  }
                </Text>
                <Text
                  as="p"
                  fontSize={{ base: '2xl' }}
                  lineHeight={1}
                  fontFamily="vt323"
                  mb={2}
                >
                  {
                    '> Be part of a team that values diversity, creativity, and teamwork.'
                  }
                </Text>
              </Box>
              <Text
                as="p"
                fontSize={{ base: '2xl' }}
                lineHeight={1}
                fontFamily="vt323"
                mb={2}
                mt={4}
              >
                {
                  'Ready to embark on this exciting journey with us? We’d love to hear about your passion for cannabis and why you’re excited to join Green Ghost.'
                }
              </Text>
              <Text
                as="p"
                fontSize={{ base: '2xl' }}
                lineHeight={1}
                fontFamily="vt323"
                mb={2}
              >
                {'Let’s grow together!'}
              </Text>
            </Box>
            <Text
              as="div"
              fontSize="2xl"
              color="ghostVerse.green.base"
              p={2}
              bgColor="ghostVerse.dark.lighter"
              display={'inline-flex'}
              width={'fit-content'}
            >
              <Link
                title={`Apply for Budtender Position`}
                href="https://docs.google.com/forms/d/e/1FAIpQLScnR4_SsE1DAn-HGk5oYhxfThlaKXFOdmWZDBi1BJrdVLcmFg/viewform?usp=sharing"
                passHref
              >
                Apply
              </Link>
            </Text>
          </Box>
          <Box>
            <Image
              src="/media/green-ghost-degen-weed-shop-jobs.webp"
              alt="Budtender Job Opening at Our Cannabis Shop - Green Ghost 🌿👻"
              width={2048}
              height={1366}
              sizes="100%"
              quality={75}
            />
          </Box>
        </Box>
      </MainLayout>
    </>
  );
};

export default Jobs;
