<?php
/**
 * @package WordPress
 * @subpackage Toolbox
 */
?>
	
		<div id="secondary" class="widget-area" role="complementary"> 
			
				<div id="confectionery"  class="widget">
					<h2 class="sidebar">Confectionery</h2>
					
					<?php query_posts('category_name=confectionery&showposts=10');?>
					<ul>
					<?php if (have_posts()) : while (have_posts()) : the_post();?>
						<li class="confectionery">
							<?php
							$date = get_the_time('d-m-y');
							$content = get_the_content() . " " .$date . ".";

							echo apply_filters('the_content',$content);
							?>

							<?php edit_post_link('Edit')?><?php
					endwhile; endif;
					wp_reset_query();
					?></ul>
					<span class="view-more"><a href="confectionery/">More Sweets? &rarr;</a></span>
				</div><!-- #confectionery -->

		</div><!-- #secondary .widget-area -->


		<?php if ( is_active_sidebar( 'sidebar-2' ) ) : ?>
		<div id="tertiary" class="widget-area" role="complementary">
			<?php dynamic_sidebar( 'sidebar-2' ); ?>
		</div><!-- #tertiary .widget-area -->
		<?php endif; ?>
