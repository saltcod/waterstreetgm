<?php
/**
 * @package WordPress
 * @subpackage Toolbox
 */

get_header(); ?>
<?php if (in_category('articles')) : get_sidebar('articles-single')?>
<?php else : ?>
<?php get_sidebar(); ?>
<?php endif; ?>




		<div id="primary">
			<div id="content" role="main">

			<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>


				<?php get_template_part( 'content', 'single' ); ?>

 
			<?php endwhile; // end of the loop. ?>

			</div><!-- #content -->
		</div><!-- #primary -->

<?php get_footer(); ?>