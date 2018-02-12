User.destroy_all
City.destroy_all

ActiveRecord::Base.connection.tables.each do |t|
    ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

user= User.create(name:'Josh',current_city:'Miami', description:'Im a retired Farmer from Michigan', user_photo:'http://stevensegallery.com/200/300', gender:'Male', relationship_status:'single'  )
city = City.create(name: 'Atlanta', photo_url: 'https://images.unsplash.com/photo-1470723710355-95304d8aece4?ixlib=rb-0.3.5&s=a593b58c119168e3b1eefc1d5cf9acf1&auto=format&fit=crop&w=1350&q=80', summary:' The City of Trees founded in 1521 by Jeans Jams', latitude:'33.7490', longitude: '84.3880', state:'Georgia', country:'US', nickname:'Home of the FreakNik', population:'472,522', city_type:'Urban'  )
post = Post.create(user: user, city: city, title: 'Vortex', body: 'Over-the-top burgers such as a triple cheeseburger between two grilled cheese sandwiches headline a staggering array of playfully indulgent pub grub at this Little Five Points bar and grill. Look for the giant skull logo and a kitschy Goth interior with exuberant house rules, collectively known as the Idiot Barometer. P.S. access is 21 and over.', post_photo:'http://www.q100atlanta.com/wp-content/uploads/sites/214/2016/06/20140516-293110-atlanta-top-10-burgers-vortex-storefront.jpg', )
post = Post.create(user: user, city: city, title: 'Ponce City Market', body: 'Ponce City Market is a mixed-use development located in a historic building in Atlanta, with national and local retail anchors, restaurants, a food hall, boutiques and offices, and residential units. It is located where the BeltLine crosses Ponce de Leon Avenue in the Old Fourth Ward where that neighborhood touches the Virginia Highland, Poncey-Highland and Midtown neighborhoods. The 2,100,000-square-foot (200,000 m2) building, one of the largest by volume in the Southeast United States, was used by Sears, Roebuck and Co. from 1926–1987 and later by the City of Atlanta as “City Hall East”. The building’s lot covers 16 acres (65,000 m2). It officially opened on August 25, 2014. It was listed on the National Register of Historic Places in 2016', post_photo:'http://www.q100atlanta.com/wp-content/uploads/sites/214/2016/06/20140516-293110-atlanta-top-10-burgers-vortex-storefront.jpg', )

