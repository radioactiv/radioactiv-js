jQuery.globalCursor = {
   setCursor   : function( newCursor ) {
      jQuery( '<style type="text/css" id="globalCursor">*,*:hover{cursor:' + newCursor + ';!important}</style>' ).appendTo( 'head' );
   },
   unsetCursor : function() {
      jQuery( '#globalCursor' ).remove();
   }
};