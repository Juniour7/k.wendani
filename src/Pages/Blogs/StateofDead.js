import React from 'react'
import { Helmet } from "react-helmet-async";

//components
import OurBeliefs from '../../Components/BlogCom/OurBeliefs';

const StateofDead = () => {
  return (
    <>
        <Helmet>
            <title>Confronting the Topics of Death, Grief, and the Afterlife | Kahawa Wendani SDA Church</title>
        </Helmet>
        <body className='mt-[60px] lg:mt-0 bg-[#F8F8F8] pb-[20px]'>
            <div className='bg-fixed relative bg-cover bg-bottom bg-no-repeat w-full h-[250px] md:h-[400px] z-0'
                style={{backgroundImage: "url(https://images.unsplash.com/photo-1489670813222-b99cb05bab79?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}
            >
                <div className='absolute inset-0 flex flex-col items-center justify-center '>
                    <div className='py-5 md:py-4  border-t-[1px] border-b-[0.5px] w-[80%] md:w-[70%] border-gray-500'>
                        <h1 className='text-2xl md:text-5xl font-semibold text-white text-center'>Confronting the Topics of Death, Grief, and the Afterlife</h1>
                    </div>
                </div>
            </div>

            <section className='mt-[50px]'>
                <div className='w-[90%] mx-auto md:flex justify-center'>
                    {/* Left Side */}
                    <div className='basis-[70%]'>
                        <div className='border-[10px] border-white md:w-[95%] h-[220px] md:h-[450px] mb-[20px] md:mb-0 shadow-md'>
                            <img 
                            src='https://images.unsplash.com/photo-1521075486433-bf4052bb37bc?q=80&w=1488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            alt='the sabbath'
                            className='w-full h-full object-cover'
                            />
                        </div>
                        <div className='mt-[20px] text-[#4A4A4A] space-y-2 w-[95%] text-sm'>
                            <p>The Bible has a lot to say about death and how it affects us as humans. What’s more, the idea of death doesn’t stop at dying. Our minds are confronted with the unknown—what happens after death, and what do we do when we’ve lost someone we love? </p>
                            <p>Scripture actually tells us about what death is and why it exists, how we can handle the accompanying grief, and how we can cling to Jesus as our eternal savior.</p>
                            <p>Curious about those topics? There’s a lot to cover. We’ll look at:</p>
                            <ol className='ml-4 list-disc'>
                                <li>What the Bible says about death</li>
                                <li>Where death came from</li>
                                <li>Where we go when we die</li>
                                <li>What the soul really is</li>
                                <li>How we should handle grief</li>
                                <li>If communication with the dead is possible</li>
                            </ol>

                            <div className='border-[10px] border-white md:w-[85%] h-[220px] md:h-[400px] mb-[20px] md:mb-0 shadow-md mx-auto mt-[20px]'>
                                <img 
                                    src='https://images.unsplash.com/photo-1702999147494-bda1cfd14bd9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    alt='the sabbath'
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <h1 className='text-2xl font-semibold'>WHAT DOES THE BIBLE SAY ABOUT DEATH?</h1>
                            <p>Death is an active part in our lives here on Earth, and God gave us the Bible to help us understand. The Bible answers all our questions about death, even starting from the beginning:</p>
                            <p className='italic'>“Sin entered the world through one man, and death through sin, and in this way death came to all people, because all sinned” (Romans 5:12, ESV). </p>
                            <p>This verse refers to when Adam and Eve sinned (Genesis 3), and reminds us that death entered into the human experience as a consequence of sin, Adam’s sin (Romans 5:12). </p>
                            <p>But before we get into that, let’s briefly see what Jesus said about death. A compelling story in the Bible gives us a glimpse at how we should view death. </p>
                            <p>Luke 8:51-53 tells how Jesus went to a man’s house to heal his sick daughter, but she died before Jesus arrived. Mourners had already gathered and were wailing outside. Upon his arrival, Jesus told the crowd to stop crying.</p>
                            <p>“She is not dead but asleep.” </p>
                            <p>The crowd laughed at him because they knew she was dead. But Jesus went into the house and raised the girl to life. </p>
                            <p>Jesus understood death to be like sleep; an unconscious state that renders the person no longer a participant in this life. And in following His example, that is also how Adventists view death.</p>
                        
                            <div className='border-[10px] border-white md:w-[55%] h-[220px] md:h-[450px] mb-[20px] md:mb-0 shadow-md mx-auto mt-[20px]'>
                                <img 
                                    src='https://i0.wp.com/lavingtonsda.org/wp-content/uploads/2024/03/what-is-death-edited-2-scaled-1.jpg?resize=768%2C769&ssl=1'
                                    alt='the sabbath'
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <h1 className='text-2xl font-semibold'>WHAT IS DEATH AND WHERE DID IT COME FROM?</h1>
                            <p>The apostle Paul also understood death to be sleep. He wrote: </p>
                            <p className='italic'>“But we do not want you to be uninformed, brothers, about those who are asleep, that you may not grieve as others do who have no hope” (1 Thessalonians 4:13). </p>
                            <p>Death is an unconscious state and is similar to sleep. The dead know nothing. They are simply awaiting the return of Christ. They are not looking down, helplessly, or interfering in the lives of those who remain. They are not paying for their sins or suffering in any way. They are literally “resting in peace,” until the resurrection. </p>
                            <p>Many verses affirm this comforting understanding of the unconscious and peaceful sleep of death. Here are a few: </p>
                            <ol className='ml-6 list-decimal italic'>
                                <li>Psalms 146:4 says, “In that very day, his thoughts perish.” </li>
                                <li>Psalms 115:17 says, “The dead do not praise the Lord.” </li>
                                <li>Psalms 6:5 says, “Among the dead no one proclaims your name.” </li>
                                <li>Ecclesiastes 9:5,10 says, “For the living know that they will die, but the dead know nothing…Their love, and their hatred, and their envy is now perished… When his breath departs, he returns to the earth; on that very day his plans perish.” </li>
                            </ol>
                            <p>How comforting it is to know that our deceased loved ones are not struggling in any way. They are not watching from a distance with anxiety. Rather, they are resting in the sleep of death, which would only seem like a single moment until the Creator of life gives them life again. </p>


                            <div className='border-[10px] border-white md:w-[85%] h-[220px] md:h-[400px] mb-[20px] md:mb-0 shadow-md mx-auto mt-[20px]'>
                                <img 
                                    src='https://i0.wp.com/lavingtonsda.org/wp-content/uploads/2024/03/why-does-death-exist-2048x1365-1.jpg?resize=768%2C512&ssl=1'
                                    alt='the sabbath'
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <h1 className='text-2xl font-semibold'>WHY DOES DEATH EXIST?</h1>
                            <p>As early as the second chapter of the Bible, death was mentioned. Death was not part of God’s plan for humanity, but it seems to already have been a contention in the universe. </p>
                            <p>It appeared alongside sin and the devil—Satan—is its proponent (John 10:10). </p>
                            <p>God warned Adam and Eve about the consequence of death if they choose to live outside God’s principles of life (Genesis 2:16, 17). But in Genesis 3:4, while tempting the human pair, Satan denied that death would be a consequence of sin. This lie was too much of a temptation for Adam and Eve, and they sinned for the first time. </p>
                            <p>This sin—that would eventually lead to death—came from Satan. And the Creator explained that they were made from the dust of the earth and to dust they will return when they die (Genesis 3:19). </p>
                        
                            <h1 className='text-2xl font-semibold'>WHERE DID DEATH COME FROM?</h1>
                            <p>In the beginning, the Creator had warned the first human pair not to eat from the tree of the knowledge of good and evil, on pain of death (Genesis 2:15-17). </p>
                            <p>Nevertheless, they did.</p>
                            <p>They disobeyed God’s warning and fell for the temptation of the devil. </p>
                            <p>From that point on, humanity took on a sinful nature, with natural inclinations towards sinning. The struggle between good and evil is real, and present in us everyday (Romans 7:18-25). </p>
                            <p>But as dismal as that can sound, we have hope in Jesus. </p>
                            <p>He took on humanity and died in our place for sin. Because of Jesus’ death, even though we may die, if we believe in Him, we will be raised from the dead. At the Second Coming, Jesus will raise those who died believing in Him, and they will live eternally with Him (Romans 6:23, John 3:16). </p>
                            <p>And so while death came through one man, Adam, life came through another—in the person of Jesus Christ (Romans 5:17).</p>
                        
                            <h1 className='text-2xl font-semibold'>WHAT WAS THE FIRST DEATH?</h1>
                            <p>The first death was actually a murder, when Cain, Adam and Eve’s first-born, killed his brother, Abel (Genesis 4:8).</p>
                            <p>Cain was overcome with sin and jealousy, and in one act of violence, he killed his brother. Though it may have been an accident, it was then when death became a part of the human experience.</p>
                            <p>Though this was a horrible act, it was not the end. </p>
                            <p>For in those first stories of Scripture, there is a prophecy of Jesus’ future sacrificial death (Genesis 3:15). And it is His death, on our behalf, that ensures eternal life for those who believe in Jesus (John 3:16). </p>
                        
                            <div className='border-[10px] border-white md:w-[85%] h-[220px] md:h-[400px] mb-[20px] md:mb-0 shadow-md mx-auto mt-[20px]'>
                                <img 
                                    src='https://images.unsplash.com/photo-1566679056462-2075774c8c07?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    alt='the sabbath'
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <h1 className='text-2xl font-semibold'>WHERE DO WE GO WHEN WE DIE?</h1>
                            <p>The dead know nothing, as the Bible tells us. So, when we die, it’s like we are sleeping, awaiting the return of Jesus.</p>
                            <p>You may be concerned about the whereabouts of a family member or friend who has died. It would be comforting to know that they are not suffering in any way. It would also be comforting to know that they are not watching our every move or distressed because they can no longer be part of our lives. And that is true. </p>
                            <p>The dead rest where they were laid until God calls them awake at the resurrection. They do not continue to live elsewhere and have to witness our lives on Earth.</p>
                            <p>And though our loved ones aren’t with us anymore, we can take comfort in knowing that even Jesus experienced the sadness we do when someone close to us dies. </p>
                            <p>When He lived on Earth, Jesus had a close friend, Lazarus, who became ill and died. Lazarus was buried in a tomb. No one knew yet, but Jesus was planning to raise Lazarus from the dead to show God’s power. But even despite knowing that, when the people told Jesus that Lazarus was dead, Jesus wept. </p>
                            <p>Though He knew Lazarus would be raised, Jesus still experienced the sadness and grief of losing a friend. But then, He comforted them by saying that Lazarus was asleep. </p>

                            <div className='border-[10px] border-white md:w-[85%] h-[220px] md:h-[400px] mb-[20px] md:mb-0 shadow-md mx-auto mt-[20px]'>
                                <img 
                                    src='https://images.unsplash.com/photo-1442115597578-2d0fb2413734?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    alt='the sabbath'
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <p>Jesus taught us many things in the story:</p>
                            <ol className='list-disc ml-6'>
                                <li>Death is an unconscious state</li>
                                <li>Those who died believing in Him are just resting</li>
                                <li>Sadness and grief is normal</li>
                                <li>The faithful will be raised to life again</li>
                            </ol>
                            <p>And that’s just one example of a story like that. Several other verses in the Bible tell us that death is a state where the individual no longer participates in this life in any way: </p>
                            <p className='italic'>“For the living know that they will die, but the dead know nothing” (Ecclesiastes 9:5).</p>
                            <p>According to the Bible, we may be comforted to know that our departed loved ones experience the sleep of death in the ground or wherever their remains are interred or scattered. When Jesus returns, He will raise those who accepted His free gift of salvation to eternal life (1 Thessalonians 4:14-18). </p>
                            <p className='italic'>Is there a heaven, hell, or purgatory? Can we know which one we’ll go to?</p>
                            <p>The Adventist church believes in a literal heaven and hell, and though we don’t go immediately to either when we die, we can know what will be our end.</p>
                            <p>The deciding factor is whether or not we believe in Christ and accept His gift of salvation. If we accept, we are promised eternal life. If we reject it, we cannot live with God and will, therefore, die a final death after the resurrection.</p>
                            <p>But this does not mean we die continually, by burning or experiencing torture. God is kind and merciful, and torture is not in His character. No, the final death means our death is eternal—that we have no hope of returning. </p>
                            <p>And only we can decide our fate. It is decided in our hearts. If we honestly choose God and His gift of salvation, we can have confidence in our eternal life with Him.</p>
                        
                            <div className='border-[10px] border-white md:w-[85%] h-[220px] md:h-[400px] mb-[20px] md:mb-0 shadow-md mx-auto mt-[20px]'>
                                <img 
                                    src='https://images.unsplash.com/photo-1486092403097-cdb66be65823?q=80&w=1496&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    alt='the sabbath'
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <h1 className='text-2xl font-semibold'>THE REALITY OF THE HUMAN SOUL</h1>
                            <p>You might wonder why so many other understandings of death and the supposed afterlife exist. There have been many influences affecting the way Christians understand death, and not all of them are biblical. </p>
                            <p>Hellenistic culture, for one, was already commonplace when Jesus walked the earth. The Greek understood life to be dualistic. But the Bible, when taken as a whole, paints a different picture.</p>
                        
                            <h1 className='text-xl italic font-semibold'>WHAT DOES THE BIBLE SAY ABOUT OUR SOUL?</h1>
                            <p>When God created Adam, the Bible says God breathed the breath of life into him, and Adam became “a living soul” (Genesis 2:7, KJV). It’s the combination of the breath of life from God and the physical creation of the earth that makes the soul. </p>
                            <p>God’s breath and the dust of the earth created Adam, an intelligent unit of existence. </p>
                            <p>Notice that these two elements—God’s breath and the dust—cannot create life on their own. They’re not independent. So, when someone dies, and their breath is gone, the living soul ceases to exist.</p>
                            <p>It’s like a simple algebra equation: </p>
                            <p>A + B = C</p>
                            <p>A is the breath of life.</p>
                            <p>B is the dust of the earth.</p>
                            <p>C is a living soul. </p>
                            <p>Take away either A or B and C, the soul, does not exist.</p>
                            <p className='italic'>Then shall the dust return to the earth as it was: and the spirit shall return unto God who gave it” (Ecclesiastes 12:7).</p>
                        
                            <div className='border-[10px] border-white md:w-[85%] h-[220px] md:h-[400px] mb-[20px] md:mb-0 shadow-md mx-auto mt-[20px]'>
                                <img 
                                    src='https://i0.wp.com/lavingtonsda.org/wp-content/uploads/2024/03/how-do-we-grieve-death-2048x1365-1.jpg?resize=768%2C512&ssl=1'
                                    alt='the sabbath'
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <h1 className='text-2xl font-semibold'>HOW DO WE GRIEVE DEATH?</h1>
                            <p>Grieving is a natural and important process of life on this Earth. The shortest verse in the Bible shows the greatest solidarity Jesus has with the human experience. It simply says, “Jesus wept” (John 11:35). </p>
                            <p>The story of Lazarus, Jesus’ friend, tells us how deeply touched Jesus was by death—He who was Himself the answer to death. It stands to reason that since we are created in God’s image, we, too, will be troubled by death and deeply affected by it. It is, after all, the enemy of life, and was never meant to be part of the human experience.</p>

                            <h1 className='text-xl italic font-semibold'>WHAT DOES THE BIBLE SAY ABOUT GRIEVING OUR LOVED ONES?</h1>
                            <p>Though there is no right or wrong way to grieve, the Bible does offer this help:</p>
                            <ol className='italic list-disc ml-5'>
                                <li>1 Thessalonians 4:13 says, “Brothers and sisters, we do not want you to be uninformed about those who sleep in death, so that you do not grieve like the rest of mankind, who have no hope.”</li>
                                <li>2 Timothy 4:8 says, “Now there is in store for me the crown of righteousness, which the Lord, the righteous Judge, will award to me on that day—and not only to me, but also to all who have longed for his appearing.”</li>
                                <li>Hebrews 9:27 says, “Just as people are destined to die once, and after that to face judgment, 28 so Christ was sacrificed once to take away the sins of many; and he will appear a second time, not to bear sin, but to bring salvation to those who are waiting for him.” </li>
                                <li>1 John 2:1 says, “My dear children, I write this to you so that you will not sin. But if anybody does sin, we have an advocate with the Father—Jesus Christ, the Righteous One.”</li>
                                <li>Job 16:19 says, “Even now my witness is in heaven; my advocate is on high.”</li>
                            </ol>
                            <p>And finally, Hebrews 4:14-16 clearly explains the hope we have in Jesus. </p>
                            <p>This hope allows us to look forward to a fair judgement where the Savior is our advocate, and an eternity with our loved ones is possible. While we miss them now, we can move forward in our lives, anticipating that amazing future God has prepared for us all. </p>
                        
                            <div className='border-[10px] border-white md:w-[85%] h-[220px] md:h-[400px] mb-[20px] md:mb-0 shadow-md mx-auto mt-[20px]'>
                                <img 
                                    src='https://images.unsplash.com/photo-1476900164809-ff19b8ae5968?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    alt='the sabbath'
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <h1 className='text-xl italic font-semibold'>HOW DO WE MOVE ON FROM LOSING A LOVED ONE?</h1>
                            <p>God knows the end from the beginning. We can have full assurance and peace if we know Him and trust in His love, no matter our current situation. </p>
                            <p>The Bible says that nothing, not even death, can separate us from His love! We may take encouragement from these further comforting Bible verses:</p>
                            <p className='italic'>“For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord” (Romans 8:38, 39). </p>
                            <p className='italic'>“And we know that in all things God works for the good of those who love him…” (Romans 8:28). </p>
                            <p className='italic'>“For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future. Then you will call on me and come and pray to me, and I will listen to you. You will seek me and find me when you seek me with all your heart. I will be found by you,” declares the Lord” (Jeremiah 29:11-14).</p>
                            <p className='italic'>“Eye hath not seen, nor ear heard, neither have entered into the heart of man, the things which God hath prepared for them that love him” (1 Corinthians 2:9).</p>
                            <p className='italic'>“He will swallow up death in victory; and the Lord God will wipe away tears from off all faces;” (Isaiah 25:8).</p>
                            <p className='italic'>“And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away (Revelation 21:4).</p>
                            <p>It’s our confidence in God and His plan that gives us the strength to go on. The Bible is a continual resource for us as we experience pain and loss in our lives. </p>
                            <p>And everything in the Bible points to the hope of life again through Jesus.</p>
                        
                            <div className='border-[10px] border-white md:w-[85%] h-[220px] md:h-[400px] mb-[20px] md:mb-0 shadow-md mx-auto mt-[20px]'>
                                <img 
                                    src='https://i0.wp.com/lavingtonsda.org/wp-content/uploads/2024/03/can-the-dead-speak-with-us-2048x1365-1.jpg?resize=768%2C512&ssl=1'
                                    alt='the sabbath'
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <h1 className='text-2xl font-semibold'>CAN THE DEAD SPEAK WITH US?</h1>
                            <a href='https://www.adventist.org/death-and-resurrection/can-the-dead-speak-to-us/' target='_blank'><p className='text-[#007681] hover:underline underline-[#007681] underline-offset-2'>The biblical answer is, no.</p></a>
                            <p>It is also against biblical counsel to attempt to speak with the dead, for reasons of avoiding the devil’s deceptions about God’s truth and God’s guidance in your life. We are not certain of tomorrow. But we are certain of who holds tomorrow—God. </p>
                            <p>Communicate with God every day, and receive the comfort and strength you need to move ahead with your life, until that day when Jesus comes, and every tear will be wiped away!</p>
                            <p>But why is it not advisable to seek a medium or to take advice from the devil? </p>
                            <p>Firstly, it is deceptive. </p>
                            <p>We know that death is like an unconscious sleep. The deceased has no participation in this life. In that case, if a medium calls up a “dead person,” who is being consulted? Satan and his angels.</p>
                            <p>Just like God knows us and has given us guardian angels, you can bet that the devil, the one who is trying to lead each of us astray, knows us very well (John 10:10). He, or his fallen angels, are quite capable of impersonating a loved one who has passed away. </p>

                            <h1 className='text-xl italic font-semibold'>WHAT DOES THE BIBLE SAY ABOUT COMMUNICATING WITH THE DEAD?</h1>
                            <p>In 2 Thessalonians 2:9-12, we read about all the deception the devil will cause in this world. Consider that, if we seek to connect with anyone who has died, we are risking a connection with the devil instead.</p>
                            <p>And 2 Corinthians 11:14 tells us that the devil even “masquerades as an angel of light.” </p>
                            <p>In Galatians 5:20 and Revelation 22:15 we see that God’s people, and those who will be in heaven do not include sorcerers, those involved in witchcraft or magic, or spiritual mediums.</p>
                            <p>The devil has always wished to lead others astray. And because God knows this, He gave instruction to His people in the Old Testament. When they were preparing to occupy the promised land, God warned them of the heathens who occupied it. </p>
                            <p>He instructed Israel saying: </p>
                            <p className='italic'>“When you enter the land the Lord your God is giving you, do not learn to imitate the detestable ways of the nations there. Let no one be found among you who sacrifices their son or daughter in the fire, who practices divination or sorcery, interprets omens, engages in witchcraft, or casts spells, or who is a medium or spiritist or who consults the dead. </p>
                            <p>Anyone who does these things is detestable to the Lord; because of these same detestable practices the Lord your God will drive out those nations before you. You must be blameless before the Lord your God” (Deuteronomy 18:9-13).</p>
                            <p>Like the Israelites, we are advised to stay away from “detestable ways” of the ungodly and cling to God instead.</p>

                            <h1 className='text-2xl font-semibold'>RESURRECTION</h1>
                            <p>In the beginning, humans were created perfect. Sin entered the universe because of Lucifer’s (who is also Satan) rebellion in heaven. He wanted to exalt himself over God (Revelation 12:7-9). </p>
                            <p>But if God destroyed Lucifer, creation would have served Him out of fear. </p>
                            <p>The only way to show God’s truly loving character was for Him to give His creation freedom of choice. And in that way, we know that Lucifer tempted the first human pair who fell for his lies, instead of obeying God’s warnings (Genesis 3:1-6). </p>
                            <p>So, God set His plan in motion to save humanity from eternal death and instead resurrect <a href='https://www.adventist.org/death-and-resurrection/what-is-the-resurrection/' target='_blank' className='text-[#007681] hover:underline underline-[#007681] underline-offset-2'>them to eternal life.</a></p>

                            <h1 className='text-xl italic font-semibold'>WHAT DOES RESURRECTION MEAN?</h1>
                            <p>Christ came to die for our sins so that we may have eternal life if we believe in Him and accept His salvation through faith (John 3:16). Then, the Bible tells us that after Jesus’ own death and resurrection, He went to prepare a place for us. </p>
                            <p>When He finishes, He will come again and take us home to be with Him forever (John 14:2,3). In order to do that, He will raise those believers who are already sleeping the sleep of death, and they will meet him in the air. </p>
                            <p>Those who are alive and believe in Him, will also be taken up to meet Him (1 Thessalonians 4:14-18). </p>
                            <p>We, therefore, live in a world where we need to understand the big picture: We are living in this <a href='https://www.adventist.org/death-and-resurrection/what-is-the-resurrection/' className='text-[#007681] hover:underline underline-[#007681] underline-offset-2'>great controversy between good and evil</a>. </p>
                            <p>In God’s Word, we see how Jesus gained the victory over sin and death. He has given us prophecies that assure us of His ultimate victory in the great controversy (Daniel and Revelation). He also shows us how things will play out. </p>
                        
                            <div className='border-[10px] border-white md:w-[85%] h-[220px] md:h-[400px] mb-[20px] md:mb-0 shadow-md mx-auto mt-[20px]'>
                                <img 
                                    src='https://images.unsplash.com/photo-1494138030114-a8cf519b022b?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    alt='the sabbath'
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <h1 className='text-xl italic font-semibold'>WHAT WILL HAPPEN DURING THE RESURRECTIONS?</h1>
                            <p>Revelation 20 and 21 reveal what happens after the Second Coming of Christ. At the Second Coming, those who died in Christ will be raised. But those in their graves and who never believed in Christ, will not be resurrected. </p>
                            <p><a href='https://www.adventist.org/who-are-seventh-day-adventists/heaven-and-the-new-earth/' className='text-[#007681] hover:underline underline-[#007681] underline-offset-2'>Those who are alive and believe in Christ will also be called to heaven</a>, but those who rejected Christ, will not survive the second coming.</p>
                            <p>No one will be alive on the earth. The earth will be desolate, except for the devil.</p>
                            <p><a href='https://www.adventist.org/millennium-and-the-end-of-sin/' className='text-[#007681] hover:underline underline-[#007681] underline-offset-2'>The millennium (1000 years)</a> will begin after the Second Coming of Christ, with the saved in heaven. Revelation 20: 4 and 6 say the saved will “judge” and “reign” with God. </p>
                            <p>After that, God and all the saved humans within the city of the New Jerusalem will “come again” to earth—a third coming. Before arriving on the earth, the unbelieving dead will be raised to face their choice. Together with the devil and His angels, the Bible says they will be destroyed in the lake of fire. This is the second and eternal death (Revelation 20:7-15).</p>
                            <p>Once the earth is cleansed in this way, it will be new: </p>
                            <p className='italic'>“Then I saw ‘a new heaven and a new earth,’ for the first heaven and the first earth had passed away, and there was no longer any sea. I saw the Holy City, the new Jerusalem, coming down out of heaven from God, prepared as a bride beautifully dressed for her husband. </p>
                            <p className='italic'>And I heard a loud voice from the throne saying, ‘Look! God’s dwelling place is now among the people, and he will dwell with them. They will be his people, and God himself will be with them and be their God. </p>
                            <p className='italic'>He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away’” (Revelation 21:1-4, ESV).</p>
                            <p>What a wonderful thought for the believer. One day, we will be able to say, “Death has been swallowed up in victory… Where, O death, is your victory? Where, O death, is your sting?” (1 Corinthians 15: 54, 55).</p>
                        
                            <div className='border-[10px] border-white md:w-[85%] h-[220px] md:h-[400px] mb-[20px] md:mb-0 shadow-md mx-auto mt-[20px]'>
                                <img 
                                    src='https://i0.wp.com/lavingtonsda.org/wp-content/uploads/2024/03/hope-in-jesus-2048x1294-1.jpg?resize=768%2C485&ssl=1'
                                    alt='the sabbath'
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <h1 className='text-2xl font-semibold'>THE HOPE WE HAVE IN JESUS CHRIST</h1>
                            <p>God has done everything in His power to save humankind, while still maintaining human’s power of choice. </p>
                            <p>Those who believe in Jesus, will live eternally with Him after the Second Coming and resurrection.</p>
                            <p>Those who rejected Jesus’ salvation will not and will die a final, permanent death.</p>
                            <p>May we grow our relationship with God and accept the free gift of salvation. May we be among those who love Him and go home with Him at His Second Coming to <a href='https://www.adventist.org/the-new-earth/' className='text-[#007681] hover:underline underline-[#007681] underline-offset-2'>live with Him for eternity</a>. May we experience that heavenly joy with no more tears and no more death.</p>
                            <p>If you want that life too, join a Bible study today!</p>
                        </div>
                    </div>


                    {/* Right Side */}
                    <div className='basis-[30%]'>
                        <OurBeliefs />
                    </div>
                </div>
            </section>
        </body>
    </>
  )
}

export default StateofDead;