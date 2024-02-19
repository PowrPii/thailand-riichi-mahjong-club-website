import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavigationBar';
import NavigationMenu from '../components/NavigationMenu';
import Footer from '../components/Footer';

const TermsAndConditions: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    }, [isMenuOpen]);

    return (
        <>
            <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <NavigationMenu isOpen={isMenuOpen} />
            <div className='flex justify-center item-center flex-col md:w-[50%] mx-8 md:mx-auto my-8'>
                <h1 className='text-4xl text-center p-8 font-bold'>TRMC Terms and Conditions</h1>
                <article className='font-medium text-justify'>
                    <p className='py-4'>Last updated: February 19, 2024</p>
                    <p>These terms and conditions (&#8220;Agreement&#8221;) set forth the general terms and conditions of your use of the thailand-riichi-mahjong-club.com website (&#8220;Website&#8221; or &#8220;Service&#8221;) and any of its related products and services (collectively, &#8220;Services&#8221;). This Agreement is legally binding between you (&#8220;User&#8221;, &#8220;you&#8221; or &#8220;your&#8221;) and this Website operator (&#8220;Operator&#8221;, &#8220;we&#8221;, &#8220;us&#8221; or &#8220;our&#8221;). If you are entering into this Agreement on behalf of a business or other legal entity, you represent that you have the authority to bind such entity to this Agreement, in which case the terms &#8220;User&#8221;, &#8220;you&#8221; or &#8220;your&#8221; shall refer to such entity. If you do not have such authority, or if you do not agree with the terms of this Agreement, you must not accept this Agreement and may not access and use the Website and Services. By accessing and using the Website and Services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Agreement. You acknowledge that this Agreement is a contract between you and the Operator, even though it is electronic and is not physically signed by you, and it governs your use of the Website and Services.</p> <br />
                    
                    <h2 className='text-2xl py-2 font-bold'>Accounts and Membership</h2> <br />

                    <p>You must be at least 13 years of age to use the Website and Services. By using the Website and Services and by agreeing to this Agreement you warrant and represent that you are at least 13 years of age. If you create an account on the Website, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account and any other actions taken in connection with it. We may monitor and review new accounts before you may sign in and start using the Services. Providing false contact information of any kind may result in the termination of your account. You must immediately notify us of any unauthorized uses of your account or any other breaches of security. We will not be liable for any acts or omissions by you, including any damages of any kind incurred as a result of such acts or omissions. We may suspend, disable, or delete your account (or any part thereof) if we determine that you have violated any provision of this Agreement or that your conduct or content would tend to damage our reputation and goodwill. If we delete your account for the foregoing reasons, you may not re-register for our Services. We may block your email address and Internet protocol address to prevent further registration.</p> <br />

                    <h2 className='text-2xl py-2 font-bold'>User Content</h2> <br />

                    <p>We do not own any data, information or material (collectively, &#8220;Content&#8221;) that you submit on the Website in the course of using the Service. You shall have sole responsibility for the accuracy, quality, integrity, legality, reliability, appropriateness, and intellectual property ownership or right to use of all submitted Content. We may monitor and review the Content on the Website submitted or created using our Services by you. You grant us permission to access, copy, distribute, store, transmit, reformat, display and perform the Content of your user account solely as required for the purpose of providing the Services to you. Without limiting any of those representations or warranties, we have the right, though not the obligation, to, in our own sole discretion, refuse or remove any Content that, in our reasonable opinion, violates any of our policies or is in any way harmful or objectionable. You also grant us the license to use, reproduce, adapt, modify, publish or distribute the Content created by you or stored in your user account for commercial, marketing or any similar purpose.</p> <br />

                    <h2 className='text-2xl py-2 font-bold'>Backups</h2> <br />

                    <p>We are not responsible for the Content residing on the Website. In no event shall we be held liable for any loss of any Content. It is your sole responsibility to maintain appropriate backup of your Content. Notwithstanding the foregoing, on some occasions and in certain circumstances, with absolutely no obligation, we may be able to restore some or all of your data that has been deleted as of a certain date and time when we may have backed up data for our own purposes. We make no guarantee that the data you need will be available.</p> <br />

                    <h2 className='text-2xl py-2 font-bold'>Links to Other Resources</h2> <br />

                    <p>Although the Website and Services may link to other resources (such as websites, mobile applications, etc.), we are not, directly or indirectly, implying any approval, association, sponsorship, endorsement, or affiliation with any linked resource, unless specifically stated herein. We are not responsible for examining or evaluating, and we do not warrant the offerings of, any businesses or individuals or the content of their resources. We do not assume any responsibility or liability for the actions, products, services, and content of any other third parties. You should carefully review the legal statements and other conditions of use of any resource which you access through a link on the Website. Your linking to any other off-site resources is at your own risk.</p>

                    <h2 id="prohibited-uses">Prohibited Uses</h2> <br />

                    <p>In addition to other terms as set forth in the Agreement, you are prohibited from using the Website and Services or Content: </p>
                    <ul className='pl-10'>
                        <li>
                            <p>
                            (a) for any unlawful purpose; <br />(b) to solicit others to perform or participate in any unlawful acts; <br />(c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; <br /> (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; <br />(e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; <br />(f) to submit false or misleading information; <br />(g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Website and Services, third party products and services, or the Internet; <br />(h) to spam, phish, pharm, pretext, spider, crawl, or scrape; <br />(i) for any obscene or immoral purpose; or <br />(j) to interfere with or circumvent the security features of the Website and Services, third party products and services, or the Internet. We reserve the right to terminate your use of the Website and Services for violating any of the prohibited uses.<br />
                            </p> <br />
                        </li>
                    </ul>
                    

                    <h2 className='text-2xl py-2 font-bold'>Intellectual Property Rights</h2> <br />
 
                    <p>&#8220;Intellectual Property Rights&#8221; means all present and future rights conferred by statute, common law or equity in or in relation to any copyright and related rights, trademarks, designs, patents, inventions, goodwill and the right to sue for passing off, rights to inventions, rights to use, and all other intellectual property rights, in each case whether registered or unregistered and including all applications and rights to apply for and be granted, rights to claim priority from, such rights and all similar or equivalent rights or forms of protection and any other results of intellectual activity which subsist or will subsist now or in the future in any part of the world. This Agreement does not transfer to you any intellectual property owned by the Operator or third parties, and all rights, titles, and interests in and to such property will remain (as between the parties) solely with the Operator. All trademarks, service marks, graphics and logos used in connection with the Website and Services, are trademarks or registered trademarks of the Operator or its licensors. Other trademarks, service marks, graphics and logos used in connection with the Website and Services may be the trademarks of other third parties. Your use of the Website and Services grants you no right or license to reproduce or otherwise use any of the Operator or third party trademarks.</p> <br />

                    <h2 className='text-2xl py-2 font-bold'>Severability</h2> <br />

                    <p>All rights and restrictions contained in this Agreement may be exercised and shall be applicable and binding only to the extent that they do not violate any applicable laws and are intended to be limited to the extent necessary so that they will not render this Agreement illegal, invalid or unenforceable. If any provision or portion of any provision of this Agreement shall be held to be illegal, invalid or unenforceable by a court of competent jurisdiction, it is the intention of the parties that the remaining provisions or portions thereof shall constitute their agreement with respect to the subject matter hereof, and all such remaining provisions or portions thereof shall remain in full force and effect.</p> <br />

                    <h2 className='text-2xl py-2 font-bold'>Changes and Amendments</h2> <br />

                    <p>We reserve the right to modify this Agreement or its terms related to the Website and Services at any time at our discretion. When we do, we will revise the updated date at the top of this page. We may also provide notice to you in other ways at our discretion, such as through the contact information you have provided.</p> <br />
                    <p>An updated version of this Agreement will be effective immediately upon the posting of the revised Agreement unless otherwise specified. Your continued use of the Website and Services after the effective date of the revised Agreement (or such other act specified at that time) will constitute your consent to those changes.</p> <br />

                    <h2 className='text-2xl py-2 font-bold'>Acceptance of These Terms</h2> <br />

                    <p>You acknowledge that you have read this Agreement and agree to all its terms and conditions. By accessing and using the Website and Services you agree to be bound by this Agreement. If you do not agree to abide by the terms of this Agreement, you are not authorized to access or use the Website and Services. This policy has been created with the help of the <a className="underline" href="https://www.websitepolicies.com/terms-and-conditions-generator" target="_blank" rel='noreferrer'>terms and conditions generator</a>.</p> <br />

                    <h2 className='text-2xl py-2 font-bold'>Contacting us</h2>

                    <p>If you have any questions, concerns, or complaints regarding this Agreement, we encourage you to contact us using the details below:</p> <br />
                    <p>
                        By email: <br className='md:hidden'/><a className="underline" href="&#109;&#097;&#105;&#108;&#116;&#111;&#058;&#97;d&#109;&#105;n&#64;t&#104;a&#105;&#108;&#97;nd-rii&#99;h&#105;&#45;mah&#106;&#111;ng-c&#108;&#117;b&#46;&#99;&#111;&#109;">a&#100;&#109;i&#110;&#64;&#116;&#104;&#97;iland-&#114;&#105;i&#99;hi&#45;m&#97;&#104;jo&#110;&#103;&#45;&#99;&#108;ub.&#99;&#111;m</a>
                    </p> <br />
                </article>
            </div>
            <Footer />
        </>
    );
};

export default TermsAndConditions;