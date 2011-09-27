<?php
/**
 * @package WordPress
 * @subpackage Toolbox
 */
?>
	
		<div id="secondary" class="widget-area" role="complementary">
			
 
			<h1 class="widget-title">You might also be interested in:</h1>
			 
			<?php
				  $args = array(
                   'cat' => '1,24',
                   'post_type' => 'post',
                   'posts_per_page' => 5,
				   'post__not_in' => array($post->ID),
                   'paged' => ( get_query_var('paged') ? get_query_var('paged') : 1),
                   );

			    query_posts($args);?>
				<ul>
				<?php while (have_posts()) : the_post();?>
				<li> <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></li>
				<?php 	endwhile; ?>
				</ul>

			<?php wp_reset_query(); ?>
			
			<span class="view-more"><a href="<?php echo home_url( 'articles' ); ?>">View all articles &rarr;</a></span>



		</div><!-- #secondary .widget-area -->


		<?php if ( is_active_sidebar( 'sidebar-2' ) ) : ?>
		<div id="tertiary" class="widget-area" role="complementary">
			<?php dynamic_sidebar( 'sidebar-2' ); ?>
		</div><!-- #tertiary .widget-area -->
		<?php endif; ?>
