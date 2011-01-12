/*
 * jQuery iconize plugin v1.0
 * 
 * Copyright (c) 2011 Brandon Cordell
 * http://github.com/brandoncordell/iconizer
 *
 * ---------------------------------------------------------
 * Thanks to Alexander Kaiser at Poolie Studios. His iconize
 * css project was the inspiration for this plugin.
 *
 * Thanks to famfamfam (http://famfamfam.com) for their 
 * amazing (as always) icons
 * ---------------------------------------------------------
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

(function($){
        
  $.fn.iconize = function(options) {
    
    var defaults = {      
      fileTypes: {
        // Images
        jpg:   { icon: 'icon_pic.gif' },
        jpeg:  { icon: 'icon_pic.gif' },
        png:   { icon: 'icon_pic.gif' },
        gif:   { icon: 'icon_pic.gif' },
        bmp:   { icon: 'icon_pic.gif' },
        svg:   { icon: 'icon_pic.gif' },
        eps:   { icon: 'icon_pic.gif' },
        // Audio
        mp3:   { icon: 'icon_music.gif' },
        wav:   { icon: 'icon_music.gif' },
        ogg:   { icon: 'icon_music.gif' },
        wma:   { icon: 'icon_music.gif' },
        m4a:   { icon: 'icon_music.gif' },
        // Video
        mov:   { icon: 'icon_film.gif' },
        wmv:   { icon: 'icon_film.gif' },
        mp4:   { icon: 'icon_film.gif' },
        avi:   { icon: 'icon_film.gif' },
        mpg:   { icon: 'icon_film.gif' },
        fla:   { icon: 'icon_film.gif' },
        swf:   { icon: 'icon_film.gif' },
        // Documents
        doc:   { icon: 'icon_doc.gif' },
        rtf:   { icon: 'icon_doc.gif' },
        txt:   { icon: 'icon_txt.gif' },
        xls:   { icon: 'icon_xls.gif' },
        pdf:   { icon: 'icon_pdf.gif' },
        pps:   { icon: 'icon_pps.gif' },
        ical:  { icon: 'icon_ical.gif' },
        // Feeds
        rss:   { icon: 'icon_feed.gif' },
        atom:  { icon: 'icon_feed.gif' },
        // Archives
        zip:   { icon: 'icon_archive.gif' },
        rar:   { icon: 'icon_archive.gif' },
        gzip:  { icon: 'icon_archive.gif' },
        bzip:  { icon: 'icon_archive.gif' },
        ace:   { icon: 'icon_archive.gif' },
        tar:   { icon: 'icon_archive.gif' },
        gz:    { icon: 'icon_archive.gif' },
        // Executables
        exe:   { icon: 'icon_exe.gif' },
        dmg:   { icon: 'icon_dmg.gif' },
        app:   { icon: 'icon_dmg.gif' },
        // Web Documents
        html:  { icon: 'icon_doc.gif' },
        htm:   { icon: 'icon_doc.gif' },
        css:   { icon: 'icon_css.gif' },
        js:    { icon: 'icon_doc.gif' },
        php:   { icon: 'icon_doc.gif' },
        phps:  { icon: 'icon_doc.gif' },
        opml:  { icon: 'icon_opml.gif' },
        // VCard
        vcard: { icon: 'icon_vcard.gif' },
        vcf:   { icon: 'icon_vcard.gif' },
        // Misc
        xpi:   { icon: 'icon_plugin.gif' }, // Firefox Extensions
        ttf:   { icon: 'icon_ttf.gif' },
        torrent: { icon: 'icon_torrent.gif' }
      }
    };
    
    return this.each(function() {
      
      if (options) {
        $.extend(defaults, options);
      }
      
      var target = $(this).attr('href');    // get the target of the anchor
      var extPos = target.lastIndexOf('.'); // get the position on the file extension
      
      if (extPos > 0)
        var ext = target.substring(extPos + 1); // get the extension
        
      if (ext)
        var extObj = defaults.fileTypes[ext]; // check if extension exists in defaults object
      
      if (extObj !== undefined) {
        css_background_value = 'url(icons/' + defaults.fileTypes[ext].icon + ') right center no-repeat';
        $(this).css('background', css_background_value)
               .css('padding', '5px 20px 5px 0');
      }
    });
    
  };
  
})(jQuery);